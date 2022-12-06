<template>
  <button @click="$router.back()" class='go-back'>
    <img src="../images/icons8-back-arrow-30.png">
  </button>
  <!-- Back icon by Icons8: https://icons8.com -->
</template>

<style scoped>
  .go-back {
    display: flex;
    border-width: 0;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    transition: opacity 0.15s;
    text-decoration: none;
    background-color: rgb(10, 97, 190);
    max-width: 50px;
    border-radius: 30px;
  }
  .go-back:hover {
    opacity: 0.8;
  }
</style>