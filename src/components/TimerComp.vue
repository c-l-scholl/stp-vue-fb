<template>
  <div class="timer" :class="{ 'show-timer': this.timerCreated }"> 
    <span class="timer-text" v-if="timerEnabled"> <!-- boolean watch variable to show conditionally -->
      {{ countDown }}
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
	
</template>
 
<script>
export default {
	data() {
		return {
			countDown: 15,
      timerEnabled: false, //boolean to conditionally show
      timerCreated: false,
      timerId: null
		}
	},
	methods: {
		countDownTimer() {
      clearTimeout(this.timerId)
			if (this.countDown > 0) {
				this.timerId = setTimeout(() => {
					this.countDown -= 1
					this.countDownTimer()
				}, 1000)
			}
		},
    play() {
      this.timerCreated = true
      setTimeout(() => {
        this.timerEnabled = true
        this.countDown = 15
        this.countDownTimer()
      }, 1000)
	  },
    restart() {
      this.timerEnabled = false //this hides the timer again
      this.countDown = 15 //wipes timer, resets to 15 seconds
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