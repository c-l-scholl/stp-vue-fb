<template>
  <button @click="$router.back()" class='go-back' id="circle-button">
    <img src="../images/icons8-back-arrow-30.png">
    <!-- Back icon by Icons8: https://icons8.com -->
  </button>
</template>

<style scoped>
  .go-back {
    display: flex;
    border-width: 0;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    color: white;
    transition: background-color 0.15s;
    text-decoration: none;
    background-color: rgb(10, 97, 190);
    max-width: 50px;
    border-radius: 30px;
  }
  .go-back:hover {
    background-color: rgb(14, 89, 169);
  }

  .go-back:active {
    box-shadow: inset 3px 5px 9px rgba(0, 0, 0, 0.15);
    background-color: rgb(14, 89, 169);
  }


</style>