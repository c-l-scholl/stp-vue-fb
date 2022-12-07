<template>
  <div class="page">
    <div class="about-router">
      <BackButtonComp/>
    </div>
    <h1>About our Playlist Generator</h1>
    <p>
      Our playlist generator provides you with a list of songs perfect for <br>
      your mood and feelings right now! Using just your heartbeat and <br>
      current mood, we instantaneously offer you music to match. <br /> <br>

      Want your music to change your feelings? <br> <br>

      No problem! We can help. <br>
      Then just select the mood you want to be in!
    </p>
    
    
  </div>
</template>
      
<script>
import BackButtonComp from '@/components/BackButtonComp.vue';
export default {
  components: { BackButtonComp }
}
</script>
  
<style scoped>

.about-router {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>