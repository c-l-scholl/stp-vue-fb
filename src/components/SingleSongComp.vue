<template>
  <div class="song-display">
    <div class="song" @click="toggleModal()">
      <div class="title-and-artist">
        <div class="song-name-div">
          <p class="song-name-text">
            {{ truncatedSongName }}
          </p>
        </div>
        <div class="artist-name">
          <p>{{ song.artist_name }}</p>
        </div>
      </div>
    </div>
    <ModalComp v-show="showModal" class="modal">
      <div class="song-details">
        <h3>Song Details:</h3>
      </div>
      <div class="song-title-desc">
        <p>Song Title: {{ song.track_name }}</p>
      </div>
      <div class="song-artist-desc">
        <p>Artist: {{ song.artist_name }}</p>
      </div>
      <div class="song-duration-desc">
        <p>Duration: {{ songDuration }}</p>
      </div>
      <div class="song-tempo-desc">
        <p>Tempo: {{ roundedTempo }}</p>
      </div>

      <!-- <router-link
      to="/mood"
      v-slot="{href, navigate}"
    >
      <button :href="href" @click="navigate" class='toMoodButton' :disabled="!isValidBpm">
        Next
      </button>
    </router-link> -->
      <!-- still doesn't work need to fix -->
      <div class="music-search-buttons">
        <a :href="youtubeHref" target='_blank' class="to-youtube-search">
          <img src="../images/Youtube-logo-png.png" alt="To YouTube" class="youtube-logo">
        </a>
        <a :href="spotifyHref" target='_blank' class="to-spotify-search">
          <img src="../images/spotifylogo.png" alt="To Spotify" class="spotify-logo">
        </a>
      </div>

    </ModalComp>
  </div>
</template>
  
<script>
import ModalComp from './ModalComp.vue'

export default {
  data() {
    return {
      showModal: false,
      roundedTempo: null,
      songDuration: null,
      truncatedSongName: '',
      maxSongNameLength: 30,
      youtubeHref: "https://www.youtube.com/results?search_query=",
      spotifyHref: "https://open.spotify.com/search/"
    }
  },
  props: ["song"],
  components: { ModalComp },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    getDurationInMinutes() {
      const minutes = Math.floor(this.song.duration_ms / 60000)
      const seconds = Math.floor((this.song.duration_ms - (minutes * 60000)) / 1000)
      this.songDuration = minutes + ":"
      if (seconds < 10) {
        this.songDuration += "0"
      }
      this.songDuration += seconds
    },
    truncateText() {
      this.truncatedSongName = this.song.track_name.substring(0, this.maxSongNameLength)
      this.truncatedSongName += '...'
    },
    setYoutubeLink() {
      const youtubeSongName = encodeURIComponent(this.song.track_name)
      const youtubeArtistName = encodeURIComponent(this.song.artist_name)
      this.youtubeHref += youtubeSongName + "+" + youtubeArtistName + "+song"
    },
    setSpotifyLink() {
      this.spotifyHref += this.song.track_name + " " + this.song.artist_name
    }
  },

  created() {
    this.roundedTempo = Math.floor(this.song.tempo) + " bpm"
    this.getDurationInMinutes()

    if (this.maxSongNameLength < this.song.track_name.length) {
      this.truncateText()
    } else {
      this.truncatedSongName = this.song.track_name
    }

    this.setYoutubeLink()
    this.setSpotifyLink()
  }
}
</script>
  
<style scoped>
.song {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.song:hover {
  background: #dfdede;
  border: 3px solid rgb(229, 153, 165);
}

.song:active {
  background: #d6d6d6;
  box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.15);
}

.song-name-div {
  display: flex;
}

.song-name-div p {
  font-size: 20px;
}

.title-and-artist {
  display: flex;
  align-items: center;
}

.song-name,
.artist-name {
  display: flex;
}

.song-name-div p {
  font-size: 25px;
  font-weight: bold;
  color: black;
  padding-right: 10px;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}

.modal h3 {
  font-size: 20px;
  color: rgb(162, 108, 117);
}

.modal {
  display: block;
  padding: 5px;
}

.modal p {
  color: black;
}

.modal .song-title-desc,
.modal .song-artist-desc,
.modal .song-duration-desc,
.modal .song-tempo-desc,
.modal .song-details {
  display: block;
}

.music-search-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.to-spotify-search,
.to-youtube-search {
  padding: 0;
  margin: 15px;
}

.to-youtube-search {
  max-width: 150px;
}  

.to-spotify-search {
  max-width: 70px;
}

.youtube-logo {
  width: 150px;
} 
.spotify-logo {
  width: 70px;
}

</style>