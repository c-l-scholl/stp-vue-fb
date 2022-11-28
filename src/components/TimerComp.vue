<template>

  
  <div class="timer">
    <span v-if="timerEnabled">
      {{ timerCount }}
    </span>
  </div>
  
  <div class="timerButtons">
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
      timerEnabled: false,
      timerCount: 15,
    }
  },
  components: {
    
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
  },
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
  }
}
</script>

<style scoped>

  .timer {
    margin-bottom: 45px;
    font-size: 75px;
    font-weight: bold;
  }
  .timerButtons {
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