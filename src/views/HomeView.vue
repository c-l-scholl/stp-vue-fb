<template>
  <h1>heartBeat</h1>
    <p>
      Welcome to your personalized playlist generator, courtesy of Spotify music
      and data. <br /> <br>
      In a matter of
      minutes, with your input heartbeat and mood, <br />
      we will provide you a playlist of music to match your current state!
    </p>

    <button type="button">
      <router-link to="/calc-bpm">
        Start
      </router-link>
      
    </button>

    <button type="button">
      <router-link to="/about-main">
      About
    </router-link>
    </button>

</template>
    
<script>
export default {

}
</script>

<style>

</style>