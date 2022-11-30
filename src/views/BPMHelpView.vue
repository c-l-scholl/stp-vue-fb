<template>
  <div class="page">
    <h1>How to Measure your Heartbeat</h1>
    <p>
      Do one of the following to find your heartbeat. <br> <br>
      At the wrist, lightly press the index and middle fingers
      of one hand on the opposite wrist, just below the base of the thumb. <br> <br>
      OR <br><br>
      At the neck, lightly press the side of the neck, just below your jawbone. <br><br>
      Still having trouble? <br>
      Follow this link to watch a brief youtube video. <br>
      <a href=" https://www.youtube.com/watch?t=2&v=BSlRvD-CZSo&feature=emb_imp_woyt" target="_blank">Heartbeat How To
        Video</a>
    </p>
    <router-link to="/calc-bpm" class="back">
      Back
    </router-link>
  </div>
</template>
  
<style scoped>
.page {
  position: relative;
  top: 50px;
}
.back {
  background-color: rgb(10, 97, 190);
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 3px;
  transition: opacity 0.15s;
}
.back:hover {
  opacity: 0.8;
}
</style>