<template>
  <h1>heartBeat</h1>
  <p>
    Welcome to your personalized playlist generator, courtesy of Spotify music
    and data. <br /> <br>
    In a matter of
    minutes, with your input heartbeat and mood, <br />
    we will provide you a playlist of music to match your current state!
    </p>

    <router-link to="/calc-bpm" class="begin">
      Start
    </router-link>

    <router-link to="/about-main" class="about">
      About
    </router-link>
</template>
    
<script>
export default {

}
</script>

<style>
  .begin,
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border-width: 0;
    margin: 5px;
    padding: 10px 15px;
    border-radius: 5px;
    color: black;
    transition: opacity 0.15s;
    text-decoration: none;
  }

  .about:hover,
  .begin:hover {
    opacity: 0.6;
  }

  .begin {
    font-size: 50px;
    font-weight: bolder;
  }
  .about {
    font-size:x-large;
    font-weight: bold;
  }
</style>