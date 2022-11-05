<template>
  <button type="button">
    <router-link to="/">Back</router-link>
  </button>

  <button type="button">
    <router-link to="/bpm-help">
      Help
    </router-link>
  </button>
  <h1>Step 1: Your Heartbeat</h1>

  <p> Enter your heartbeat using the 15 second timer below. <br />
    Click Start when ready. <br> </p>

    <br>
    <button type="button" @click="restart()">
      Reset Timer
    </button>
    <br>
    <button type="button" @click="play()">
      Start Timer
    </button>

  <p>
    <!-- https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js -->

    <span v-if="timerEnabled">
      {{ timerCount }}
    </span>
  </p>




  <label for="Heartbeat">Heartbeat (BPM):</label>
  <input v-model="bpm" type="number" class="Heartbeat" placeholder="Enter Heartbeat" step=1/>

  <button type="reset" value="Reset">
    Reset
  </button>
  <br><br><br><br>

  Click the above "Help" button for more details and a video. <br><br>
  Don't want to do it? <br>
  No problem too! Click the "Skip" button below to enter an estimation.

  <br> <br>

  <button type="button">
    <router-link to="/skip-bpm">Skip</router-link>
  </button>

  <button type="button" @click="checkBpm()">
    <router-link to="/mood">Next</router-link>
  </button>

</template>







<script>
import TimerComp from '../components/TimerComp.vue'


//https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
export default {
  data() {
    return {
      bpm: null,
      timerEnabled: false,
      timerCount: 15
    }
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },
    
    timerCount: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  } ,
  methods: {
    play() {
      this.timerEnabled = true;
    },
    //pause() {
      //this.timerEnabled = false;
    //},
    restart() {
      this.timerEnabled = false;
      this.timerCount = 15;
    },
    checkBpm() {
      if (!this.bpm || this.bpm < 20 || this.bpm > 200) {
        this.bpm = null
        // print out something that tells the user 
        // they entered an invalid value
      }
      this.emitter.emit("user-bpm", this.bpm)
      console.log(this.bpm)
    }
  }
}

// https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
// var timeleft = 0;
// var downloadTimer = setInterval(function () {
//   timeleft--;
//   //document.getElementById("countdowntimer2").textContent = timeleft;
//   if (timeleft <= 0)
//     clearInterval(downloadTimer);
// }, 1000);


</script>

<style>

</style>

