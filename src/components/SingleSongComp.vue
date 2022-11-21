<template>
  <div class="songDisplay">
    <div class="song" @click="toggleModal()">
      <div class="titleAndArtist">
        <div class="songName">
          <p>
            {{ song.track_name }} 
          </p>
        </div>
        <div class="artistName">
          <p>{{ song.artist_name }}</p>
        </div>
      </div>  
      
    </div>
    <ModalComp @close="toggleModal()" v-show="showModal" class="modal">
      <h3>Song Details:</h3>
      <p>Duration: {{ songDuration }}</p>
      <p>|</p>
      <p>Tempo: {{ roundedTempo }}</p>
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
        songDuration: null
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
        if(seconds < 10) {
          this.songDuration += "0"
        }
        this.songDuration += seconds
      },
    },

    created() {
      this.roundedTempo = Math.floor(this.song.tempo) + " bpm"
      this.getDurationInMinutes()
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
      border: 3px solid green;
    }

    .song:active {
      background: #d6d6d6;
      box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.15);
    }

    .songName {
      display: flex;
    }

    .songName p {
      font-size: 20px;
    }
    .buttondiv {
      display: flex;

    }

    .titleAndArtist {
      display: flex;
      align-items: center;
    }

    .songName,
    .artistName {
      display: flex;
    }

    .songName p {
      font-size: 25px;
      font-weight: bold;
      color: black;
      padding-right: 10px;
    }

    .button {
      border-radius: 13px;
      border-width: 0px;
      height: 25px;
      width: 25px;
      font-weight: bold;

    }
    .modal {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 150px;
      margin-right: 100px;
      padding: 5px;
    }

    .modal h3 {
      font-size: 20px;
    }

    .modal p {
      color: black;
    }

    .modal h3,
    .modal p {
      display: flex;
      padding: 5px;
    }


    </style>