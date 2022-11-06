<template>
    <div class="song">
      <div class="songName">
        <h3>
          {{ song.track_name }}
        </h3>
      </div>
      <ModalComp @close="toggleModal()" v-if="showModal" >
        <h3>Song Details</h3>
        <p>Artist: {{ song.artist_name }}</p>
        <p>Tempo: {{ song.tempo }}</p>
      </ModalComp>
      <div class="buttondiv">
        <button @click="toggleModal()" class="button">i</button>
      </div>
      
    </div>
    
  </template>
  
  <script>
  import ModalComp from './ModalComp.vue'

  export default {
    data() {
      return {
        showModal: false
      }
    },
    props: ["song"],
    components: { ModalComp },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      }
    }
  };
  </script>
  
  <style scope>
    .fas {
      color: red;
    }
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
    .songName {
      display: flex;
    }
    .buttondiv {
      display: flex;

    }

    .button {
      border-radius: 13px;
      border-width: 0px;
      height: 25px;
      width: 25px;
      font-weight: bold;

    }
    </style>