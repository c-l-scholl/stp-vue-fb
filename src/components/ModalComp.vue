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
  .backdrop {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    }
  .modal h3 {
    color: #03cfb4;
    border: none;
    padding-bottom: 10px;
  }
  .modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }
  .modal .actions a {
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
  </style>