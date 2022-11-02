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
  async mounted() {
    this.emitter.on('user-bpm', bpm => {
      this.bpm = bpm
      console.log("user bpm: " + this.bpm)
    })

    this.emitter.on('user-mood', mood => {
      this.moods.push(mood)
      console.log("user mood: " + moods[0])
    })

    const allSongData = await getDocs(collection(db, "spotifydata"))
    allSongData.forEach((song) => {
      this.songs.push(song.data())
    })

    // const userData = await getDoc(collection(db, "BPM-moods", "UserData"))
    // this.bpm = userData.data();
    // console.log(this.bpm)
    // very bad code need to fix 
    // if(userData.data().mood1 !== null) {
    //   this.moods.push(userData.data().mood1)
    // }
    // if(userData.data().mood2 !== null) {
    //   this.moods.push(userData.data().mood2)
    // }

  }
}
</script>

<style>

</style>