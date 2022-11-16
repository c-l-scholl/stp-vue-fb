<template>
  
  <div class="timerButtons">
    <button type="button" @click="restart()" class="reset">
      Reset Timer
    </button>
    <button type="button" @click="play()" class="start">
      Start Timer
    </button>
  </div>
  <div>
    <!-- https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js -->

    <span v-if="timerEnabled">
      {{ timerCount }}
    </span>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      timerEnabled: false,
      timerCount: 15,
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

<style>
  .timerButtons {
    display: flex;
    justify-content: center;
    align-items: center;
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
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    transition: opacity 0.15s;
  }
  </style>