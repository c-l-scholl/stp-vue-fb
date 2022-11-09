<template>
  
  <h1>Step 1: Your Heartbeat</h1>

  <!-- <button type="button" class="back">
    <router-link to="/">Back</router-link>
  </button> -->
  


  <p> Count your heartbeats during the 15 second timer </p>
  <div class="intro">
    <h3>Don't know how?  </h3>
    <router-link to="/bpm-help" class="toHelp">
      Help
    </router-link>
  </div>
  <h2>Click Start Timer when ready. <br> </h2>

    <br>
    <div class="timerButtons">
      <button type="button" @click="restart()" class="reset">
        Reset Timer
      </button>
      <button type="button" @click="play()" class="start">
        Start Timer
      </button>
    </div>
    

  <p>
    <!-- https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js -->

    <span v-if="timerEnabled">
      {{ timerCount }}
    </span>
  </p>




  <label for="Heartbeat">Number of beats: </label>
  <input v-model="bpm" type="number" class="Heartbeat" placeholder="*ba-dump*" step=1/>

  <button type="reset" value="Reset">
    Reset
  </button>
  <br><br><br><br>

  Don't want to do it? <br>
  No problem too! Click the "Skip" button below to enter an estimation.

  <br> <br>

    <router-link to="/skip-bpm" class="skip">
      Skip
    </router-link>

    <router-link to="/mood" @click="checkBpm()" class="toMood">
      Next
    </router-link>

</template>

<script>
import TimerComp from '../components/TimerComp.vue'


//https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
export default {
  data() {
    return {
      bpm: null,
      timerEnabled: false,
      timerCount: 15,
      bpmMultiplier: 4
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
      if (!this.bpm || this.bpm < 5 || this.bpm > 40) {
        this.bpm = null
        // print out something that tells the user 
        // they entered an invalid value
      }
      this.bpm *= this.bpmMultiplier // calculates actual heartrate
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
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .intro h3 {
    display: flex;
    margin-right: 15px;
  }

  .toHelp {
    text-decoration: none;
    color: white;
    display: flex;
    background-color: rgb(13, 181, 103);
    padding: 10px 15px;
    border-radius: 5px;
    transition: opacity 0.15s;
  }

  .toHelp:hover {
    opacity: 0.8;
  }

  .timerButtons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reset,
  .start {
    display: flex;
    border-width: 0;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    transition: opacity 0.15s;
  }

  .reset:hover, 
  .start:hover {
    opacity: 0.6;
  }

  .reset {
    margin-right: 10px;
    background-color: red;
  }

  .start {
    background-color: green;
  }
</style>

