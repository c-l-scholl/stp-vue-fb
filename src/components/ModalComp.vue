<template>
  <div class="modal">
    <!-- default content only shows if no slot is passed in-->
    <slot>default content</slot>
  </div>
</template>
  
<script>
  export default {
    props: [],
    data() {
      return{
      }
    },
    methods: {
    }
  }
</script>
  
<style scoped>
  .modal {
    padding: 20px;
    background-color: white;
    border-radius: 10px;
  }
  .modal h3 {
    color: #03cfb4;
    border: none;
    padding-bottom: 10px;
  }
  </style>