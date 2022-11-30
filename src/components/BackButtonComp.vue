<template>
  <button @click="$router.back()" class='go-back'>
    Back
  </button>
</template>

<style scoped>
  .go-back {
    border-width: 0;
    margin: 5px;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    transition: opacity 0.15s;
    text-decoration: none;
    background-color: rgb(10, 97, 190);
  }
  .go-back:hover {
    opacity: 0.8;
  }

  
</style>