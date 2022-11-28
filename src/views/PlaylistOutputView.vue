<template>
  <div class="page">
    <h1>Step 3: Your Playlist</h1>
    <p>
      Your Playlist is below!
    </p>
    <div class="container">
      <p v-if="loading">Loading Songs...</p>
      <SongDisplayComp :songs="randomSongs"/>
    </div>
    <div class="toHome">
      <router-link to="/" class="homeButton">
        Home
      </router-link>
    </div>
  </div>
  
  
</template>

<script>
import { db } from '../firebase/firebase.js'
import { ref, onValue } from 'firebase/database'
import SongDisplayComp from '@/components/SongDisplayComp.vue'


export default {
  data() {
    return {
      songs: null,
      bpm: null, 
      mood: null,  
      hasUserData: false,
      randomSongs: [],
      numRandomSongs: 5,
      loading: true
    }
    
  },
  components: { SongDisplayComp },
  methods: {
    
      //filter by bpm
    filterByBpm(tempo) {
      console.log('user bpm: ' + this.bpm)
      return ((tempo < this.bpm + 20) && (tempo > this.bpm - 20)) || (((tempo  < (this.bpm * 2) + 20) && (tempo > (this.bpm * 2) - 20)))
    },
    filterByMood(song) {
      console.log('current mood: ' + this.mood)
      switch(this.mood) {
        case 'Happy':
          return song.danceability >= 0.5 && song.energy >= 0.5 && song.valence >= 0.3
        case 'Sad':
          return song.acousticness >= 0.6 && song.speechiness >= 0.1 && song.valence <= 0.5
        case 'Relaxed':
          return song.acousticness >= 0.6 && song.valence >= 0.4 && song.valence <= 0.6
        case 'Nervous':
          return song.energy >= 0.6 && song.speechiness >= 0.1
        case 'Angry':
          return song.danceability >= 0.4 && song.energy >= 0.5 && song.speechiness >= 0.1
        case 'Annoyed':
          return song.liveness >= 0.5 && song.speechiness >= 0.1
        case 'Sleepy':
          return song.acousticness >= 0.6 && song.danceability <= 0.4 && song.energy <= 0.4
        case 'Heartbroken':
          return song.energy <= 0.4 && song.speechiness >= 0.1 && song.valence <= 0.5
        default:
          console.log('The current mood ' + this.mood+ ' is not available yet')
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
    randomizeSongList() { 
      this.randomSongs = []
      const totalNumSongs = this.songs.length
      for(let i = 0; i < this.numRandomSongs; i++) {
        const randomSong = this.songs[Math.floor(Math.random() * totalNumSongs)]
        if(!(this.randomSongs.includes(randomSong))) {
          this.randomSongs.push(randomSong)
        }
      }
      this.loading = false
    }
    
  },
  
  mounted() {
    // uses vuex to get data from other views
    this.bpm = this.$store.state.bpm
    this.mood = this.$store.state.mood

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

<style scoped>

.page {
  position: relative;
  top: 50px;
}

.homeButton {
  text-decoration: none;
  color: white;
  background-color: rgb(26, 169, 216);
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: opacity 0.15s;
}

.homeButton:hover{
  opacity: 0.8;
}

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