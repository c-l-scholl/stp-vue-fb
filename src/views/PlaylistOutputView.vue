<template>
  <h1>Step 3: Your Playlist</h1>
  <p>
    Your Playlist is below!
  </p>
  <div class="container">
    <SongDisplayComp :songs="randomSongs"/>
  </div>
  
</template>

<script>
import { db } from '../firebase/firebase.js'
import { ref, child, get, onValue } from 'firebase/database'
import SongDisplayComp from '@/components/SongDisplayComp.vue'


export default {
  data() {
    return {
      songs: null,
      bpm: null, 
      mood: null,  
      hasUserData: false,
      randomSongs: [],
      numRandomSongs: 5
    }
    
  },
  components: { SongDisplayComp },
  methods: {
    
      //filter by bpm
    filterByBpm(tempo) {
      return ((tempo < this.bpm + 20) && (tempo > this.bpm - 20)) || (((tempo  < (this.bpm * 2) + 20) && (tempo > (this.bpm * 2) - 20)))
    },
    filterByMood(song) {
      console.log('current mood: ' + this.mood)
      switch(this.mood) {
        case 'Happy':
          return song.danceability >= 0.5 && song.energy >= 0.5 && song.valence >= 0.3
        case 'Sad':
          return song.acousticness >= 0.6 && song.danceability < 0.4
        default:
          console.log('The current mood ' + this.mood+ ' is not availabe yet')
      }
    },
    getSongsFromFB() { 
      this.songs = []
      const dbRef = ref(db, 'songs/')
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const songData = childSnapshot.val()
          if(this.filterByBpm(songData.tempo) && this.filterByMood(songData)) {
            this.songs.push(songData)
          }
          
        })
        this.randomizeSongList()
      })
      
    },
    async getUserValues() {
      // get bpm from firebase
      const dbRef = ref(db)
      await get(child(dbRef, 'userBpm/0')).then((bpmSnapshot) => {
        if(bpmSnapshot.exists()) {
          this.bpm = bpmSnapshot.val().bpm
          console.log(this.bpm)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      })
      // get mood from realtime 
      await get(child(dbRef, 'userMood/0')).then((moodSnapshot) => {
        if(moodSnapshot.exists()) {
          this.mood = moodSnapshot.val().mood
          console.log(this.mood)
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      })

      // after retrieving data, get songs from firebase 
      this.hasUserData = true;
      this.getSongsFromFB()
    },
    // limits number of songs output and gets random playlist everytime 
    randomizeSongList() { 
      this.randomSongs = []
      const totalNumSongs = this.songs.length
      for(let i = 0; i < this.numRandomSongs; i++) {
        const randomSong = this.songs[Math.floor(Math.random() * totalNumSongs)]
        if(!(this.randomSongs.includes(randomSong))) {
          this.randomSongs.push(randomSong)
        }
      }
    }
    
  },
  mounted() {
    if(this.bpm === null && this.mood === null) {
      this.hasUserData = false;
      this.getUserValues()
    } else {
      this.hasUserData = true
    }
    

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
  max-width: 750px;
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