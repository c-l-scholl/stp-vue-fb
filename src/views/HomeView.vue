<template>
  <div class="page">
    <img src="../images/heartBeatIconTitled.png" height="300">
    <!-- heart color:#E31B4D, accent color: #F8C9D5 -->
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
  font-size: 1em;
}

.begin-button,
.about-button {
  display: block;
  margin: 30px;
}
.begin,
.about {
  padding: 0.8em;
  border-width: 0;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  color: black;
  transition: opacity 0.15s;
  transition: letter-spacing 0.75s;
  letter-spacing: normal;
  text-decoration: none;
}
.about:hover,
.begin:hover {
  opacity: 0.8;
}

.begin:hover {
  letter-spacing: 5px;
}
.about:hover {
  letter-spacing: 3px;
}
.begin {
  font-size: 4em;
  font-weight: bolder;
  max-width: fit-content;
}
.about {
  font-size: 2em;
  font-weight: bold;
  max-width: fit-content;
}


</style>