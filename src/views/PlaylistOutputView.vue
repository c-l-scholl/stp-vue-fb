<template>
  <h1>Step 3: Your Playlist</h1>
  <p>
    Your Playlist is below!
  </p>
</template>

<script>
import { db } from '../firebase/firebase.js'
import { collection, getDocs, } from 'firebase/firestore'

export default {
  data() {
    return {
      songs: null,
      bpm: null,
      moods: [], // put in array
      //moodData: Map<mood, [] of dataObject> 
      //dataObject: []
      /*
        dataObject contains metric type (i.e. danceability, speechiness)
        and bounds for each one based on the mood
      */
    }
    
  },
  methods: {
    
      //filter by bpm
      filterByBpm(tempo) {
        return (tempo < this.bpm + 20) && (tempo > this.bpm - 20)
      },
      async getSongsFromFB() { // only call where its needed, filter when grabbing data to decrease traffic
        const allSongData = await getDocs(collection(db, "spotifydata"))
        allSongData.forEach((song) => {
          if(this.filterByBpm(song.data().tempo)) {
            this.songs.push(song.data())
            console.log(song.data().trackName)
          }
          
        })
      }
      
      

    

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
    if(!this.songs) {
      this.songs = []
      this.getSongsFromFB()
    }
    
  }
}
</script>

<style>

</style>