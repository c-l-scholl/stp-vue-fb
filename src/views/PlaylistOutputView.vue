<template>
  <h1>Step 4: Your Playlist</h1>
  <p>
    Your Playlist is below!
  </p>
</template>

<script>
import { db } from '../firebase/firebase.js'
import { collection, getDocs, getDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      songs: [],
      //bpm: get from firebase
      //moods: [] put in array
      //moodData: Map<mood, dataObject> 
      //dataObject: []
      /*
        dataObject contains metric type (i.e. danceability, speechiness)
        and bounds for each one based on the mood
      */
    }
  },
  methods: {
    /*
      filter by bpm
      songs.filter(song => {
        song.data().bpm < this.bpm + 20 || song.data().bpm > this.bpm - 20
      })

    */

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
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "spotifydata"))
    querySnapshot.forEach((song) => {
      this.songs.push(song.data())
    })
  }
}
</script>

<style>

</style>