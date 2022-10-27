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
      songs: []
    }
  },
  methods: {

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