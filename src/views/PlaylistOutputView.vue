<template>
  <h1>Step 4: Your Playlist</h1>
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
      songs: [],
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
      filterByBpm() {
        songs.filter(song => {
          song.data().bpm < this.bpm + 20 || song.data().bpm > this.bpm - 20
        })
        console.log(songs[0].trackName)
      },
      setBpm() {
        this.emitter.on('user-bpm', bpm => {
          this.bpm = bpm
          console.log("user bpm: " + this.bpm)
        })
      },
      setMoods() {
        this.emitter.on('user-mood', mood => {
          this.moods.push(mood)
          console.log("user mood: " + this.moods[0])
        })
      },
      async getSongsFromFB() { // only call where its needed, filter when grabbing data to decrease traffic
        const allSongData = await getDocs(collection(db, "spotifydata"))
        allSongData.forEach((song) => {
          this.songs.push(song.data())
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
    this.setBpm()
    this.setMoods()
    if(songs[0] === null) {
      //this.getSongsFromFB()
    }
    
  }
}
</script>

<style>

</style>