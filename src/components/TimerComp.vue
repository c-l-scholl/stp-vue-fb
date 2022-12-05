<template>
  <div class="timer" :class="{ 'show-timer': this.timerCreated }"> 
    <span class="timer-text" v-if="timerEnabled"> <!-- boolean watch variable to show conditionally -->
      {{ timerCount }} 
    </span>
  </div>
  
  <div class="timer-buttons">
    <button v-if="!timerEnabled" type="button" @click="play()" class="start">
      Start Timer
    </button>
    <button v-else type="button" @click="restart()" class="reset">
      Reset Timer
    </button>
  </div>
    <!-- https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js -->
</template>
 
<script>
export default {
  data() {
    return {
      timerEnabled: false, //boolean to conditionally show
      timerCount: 15, //15 seconds long
      timerCreated: false
    }
  },
  components: {
  },
  watch: {
    timerEnabled(value) {
      if (value) { //if timer has time left, count down
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
  },
  methods: {
    play() {
      this.timerCreated = true
      setTimeout(() => this.timerEnabled = true, 1000)
    },
    restart() {
      this.timerEnabled = false //this hides the timer again
      this.timerCount = 15 //wipes timer, resets to 15 seconds
      this.timerCreated = false
    }
  }
}
</script>

<style scoped>

  .timer {
    height: 0;
    transition: height 1s;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
  .show-timer {
    height: 100px;
  }

  .timer-text {
    display: flex;
    font-size: 75px;
  }
  
  .reset:hover, 
  .start:hover {
    opacity: 0.8;
  }
  .reset:active,
  .start:active {
    box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.15);
    opacity: 0.6px;
  }
  .reset {
    background-color: red;
  }
  .start {
    background-color: green;
  } 
  .reset,
  .start {
    border-width: 0;
    padding: 50px 20px;
    border-radius: 75px;
    color: white;
    transition: opacity 0.15s;
    font-weight: bold;
  }
  </style>