<template>
  <div class="timer"> 
    <span v-if="timerEnabled"> <!-- boolean watch variable to show conditionally -->
      {{ timerCount }} 
    </span>
  </div>
  
  <div class="timer-buttons">
    <button type="button" @click="restart()" class="reset">
      Reset Timer
    </button>
    <button type="button" @click="play()" class="start">
      Start Timer
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
      this.timerEnabled = true; 
    },
    restart() {
      this.timerEnabled = false; //this hides the timer again
      this.timerCount = 15; //wipes timer, resets to 15 seconds
    },
  }
}
</script>

<style scoped>
  .timer {
    margin-bottom: 45px;
    font-size: 75px;
    font-weight: bold;
  }
  .timer-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
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
    margin-right: 10px;
    background-color: red;
  }
  .start {
    background-color: green;
  } 
  .reset,
  .start {
    display: flex;
    border-width: 0;
    padding: 50px 20px;
    border-radius: 200px;
    color: white;
    transition: opacity 0.15s;
    font-weight: bold;
  }
  </style>