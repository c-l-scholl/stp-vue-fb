<template>
  <h1>Step 3: Your Playlist</h1>
  <p>
    Your Playlist is below!
  </p>
  <div class="container">
    <SongDisplayComp :songs="songs"/>
  </div>
  
</template>

<script>
import { db } from '../firebase/firebase.js'
import { ref, child, get, onValue } from 'firebase/database'
import SongDisplayComp from '@/components/SongDisplayComp.vue'


export default {
  data() {
    return {
      songs: [],
      bpm: null, //only for testing purposes, set to null
      mood: null, //only for testing purposes, set to empty 
      //moodData: Map<mood, [] of dataObject> 
      //dataObject: []
      /*
        dataObject contains metric type (i.e. danceability, speechiness)
        and bounds for each one based on the mood
      */
      gotSongs: false
    }
    
  },
  components: { SongDisplayComp },
  methods: {
    
      //filter by bpm
    filterByBpm(tempo) {
      return ((tempo < this.bpm + 20) && (tempo > this.bpm - 20)) || (((tempo * 2 < this.bpm + 20) && (tempo * 2 > this.bpm - 20)))
    },
    filterByMood(song) {
      console.log('current mood: ' + this.mood)
      switch(this.mood) {
        case 'Happy':
          return song.liveness >= 0.6 && song.energy >= 0.6
        case 'Sad':
          return song.acousticness >= 0.6 && song.danceability < 0.4
        default:
          console.log('The current mood ' + this.mood+ ' is not availabe yet')
      }
    },
    async getSongsFromFB() { 
      const dbRef = ref(db, 'songs/')
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val()
          this.songs.push(childData)
        })
      })
    },
    async getUserValues() {
      const dbRef = ref(db)
      get(child(dbRef, 'userBpm/0')).then((bpmSnapshot) => {
        if(bpmSnapshot.exists()) {
          this.bpm = bpmSnapshot.val().bpm
          console.log(this.bpm)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      })
      get(child(dbRef, 'userMood/0')).then((moodSnapshot) => {
        if(moodSnapshot.exists()) {
          this.mood = moodSnapshot.val().mood
          console.log(this.mood)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      })
    }
    
  },
  mounted() {
    this.getUserValues()
    this.getSongsFromFB()

    // for testing purposes, get songs from json
    // fetch('http://localhost:3000/songs')
    //   .then((res) => res.json())
    //   .then(data => {
    //     data.forEach((song) => {
    //       if(this.filterByBpm(song.tempo) && this.filterByMood(song)) {
    //         this.songs.push(song)
    //       }
    //     })
    //   })
    //   .catch(err => console.log(err.message))
    
    
  },
  
}
</script>

<style>


.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>