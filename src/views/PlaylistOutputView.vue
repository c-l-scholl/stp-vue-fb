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
import { collection, getDocs, } from 'firebase/firestore'
import SongDisplayComp from '@/components/SongDisplayComp.vue'


export default {
  data() {
    return {
      songs: [],
      bpm: 60, //only for testing purposes, set to null
      moods: ['happy'], //only for testing purposes, set to empty 
      //moodData: Map<mood, [] of dataObject> 
      //dataObject: []
      /*
        dataObject contains metric type (i.e. danceability, speechiness)
        and bounds for each one based on the mood
      */
    }
    
  },
  components: { SongDisplayComp },
  methods: {
    
      //filter by bpm
      filterByBpm(tempo) {
        return ((tempo < this.bpm + 20) && (tempo > this.bpm - 20)) || (((tempo * 2 < this.bpm + 20) && (tempo * 2 > this.bpm - 20)))
      },
      async getSongsFromFB() { // only call where its needed, filter when grabbing data to decrease traffic
        const allSongData = await getDocs(collection(db, "spotifydata"))
        allSongData.forEach((song) => {
          if(this.filterByBpm(song.data().tempo)) {
            this.songs.push(song.data())
            console.log(song.data().trackName)
          }
          
        })
      },
    /*
      filter by mood 
      dataObjects.forEach(() => {
        songs.filter(song => {
          song.data().[whatever the data thing is] < data.upperBound ||
          song.data().[same thing] > data.lowerBound
        })
      })

    */

  },
  mounted() {
    this.emitter.on('user-bpm', bpm => {
      this.bpm = bpm
      console.log("user bpm: " + this.bpm)
    })
    this.emitter.on('user-mood', mood => {
      this.moods.push(mood)
      console.log("user mood: " + this.moods[0])
    })
    
    // this.getSongsFromFB()

    // for testing purposes, get songs from json
    fetch('http://localhost:3000/songs')
      .then((res) => res.json())
      .then(data => {
        data.forEach((song) => {
          if(this.filterByBpm(song.tempo)) {
            this.songs.push(song)
          }
        })
      })
      .catch(err => console.log(err.message))
    
  }
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