<template>
    <div class="song">
      <h3>
        {{ songName }}
      </h3>
      <ModalComp @close="toggleModal()" v-if="showModal">
        <h1>Song Details</h1>
        <p>Tempo: something</p>
      </ModalComp>
      <button @click="toggleModal()" class="button">i</button>
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
    props: ["songName"],
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
    }
    .song h3 {
      display: inline-block;
      align-items: center;
    }
    .button {
      display: inline-block;
      margin-left: 20px;
    }
    </style>