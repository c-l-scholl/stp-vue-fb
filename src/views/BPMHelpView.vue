<template>
  <div class="page">
    <div class="back-button">
      <BackButtonComp />
    </div>
    <div class="information">
      <h1>How to Measure your Heartbeat</h1>
      <p>
        Do one of the following to find your heartbeat. <br> <br>
        At the wrist, lightly press the index and middle fingers
        of one hand on the opposite wrist, just below the base of the thumb. <br> <br>
        OR <br><br>
        At the neck, lightly press the side of the neck, just below your jawbone. <br><br>
        <img alt="pulse" src="../images/TakingYourPulse.jpg" height="200">
        <br><br>
        Still having trouble? <br>
        Follow this link to watch a brief youtube video. <br>
        <a href=" https://www.youtube.com/watch?t=2&v=BSlRvD-CZSo&feature=emb_imp_woyt" target="_blank">Heartbeat How To
          Video</a>
      </p>
    </div>


  </div>
</template>

<script>
import BackButtonComp from '@/components/BackButtonComp.vue'

export default {
  components: { BackButtonComp }
}
</script>
  
<style scoped>


.back-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>