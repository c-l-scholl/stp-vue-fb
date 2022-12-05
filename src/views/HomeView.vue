<template>
  <div class="page">
    <h1>heartBeat</h1>
    <p>
      Welcome to your personalized playlist generator, courtesy of Spotify music
      and data. <br /> <br>
      In a matter of
      minutes, with your input heartbeat and mood, <br />
      we will provide you a playlist of music to match your current state!
    </p>
    <div class="routers">
      <div class="begin-button">
        <router-link to="/calc-bpm" class="begin">
          Start
        </router-link>
      </div>
      <div class="about-button">
        <router-link to="/about-main" class="about">
          About
        </router-link>  
      </div>
    </div>
    
  </div>
</template>
  
<style scoped>
.page {
  position: relative;
  top: 50px;
  
}

.begin-button,
.about-button {
  display: block;
  margin: 30px;
}
.begin,
.about {
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
  max-width: fit-content;
}
.about {
  font-size: x-large;
  font-weight: bold;
  max-width: fit-content;
}
</style>