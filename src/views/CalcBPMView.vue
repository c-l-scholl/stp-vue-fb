<template>
  <div class="nav-buttons">
    <BackButtonComp />
    <router-link to="/bpm-help" class="to-help">
      <img src="../images/icons8-question-mark-30.png">
      <!-- Question Mark icon by Icons8: https://icons8.com -->
    </router-link>
  </div>
  <div class="page">
    <div class="title">
      <h1>Step 1: Your Heartbeat</h1>
    </div>
    <div class="instructions">
      <h3>
        Count your heartbeats during the 15 second timer
      </h3>
    </div>

    <div class="timer-text">
      <h3>Click Start Timer when ready. </h3>
    </div>
    <div class="timer-comp">
      <TimerComp />
    </div>


    <div class="user-input">
      <div class="input-box">
        <input 
          v-model="bpm" 
          type="number" 
          class="heartbeat-input" 
          :placeholder="this.bpm" 
          step=1
          @input="checkBpm" />
      </div>
      <!-- creates input entry box, checking input against method below, looking for valid entry -->

      <div class="next-button-router">
        <router-link to="/mood" @click="setUserBpm" class="next-button" :class="{ 'disabled': !this.isValidBpm }">
          Next
        </router-link>
      </div>
      <!-- Button disabled if no entry or not in valid range-->
    </div>
    <div class="routers">
      <router-link to="/skip-bpm" class="skip">
        Skip
      </router-link>
    </div>
  </div>
</template>

<script>
import TimerComp from '../components/TimerComp.vue'
import BackButtonComp from '../components/BackButtonComp.vue'

//pulls in text based timer created in separate vue 
//https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
export default {
  data() {
    return {
      bpm: "Number of beats" , //sets bpm entry as empty from start
      bpmMultiplier: 4, //because 15 second timer, standardizes input to beats per minute
      isValidBpm: false //boolean watcher set to ensure next button starts as disabled
    }
  },
  components: {
    TimerComp,
    BackButtonComp
  },
  methods: {
    checkBpm() { //is bpm in valid human range and is it an entered value?
      this.isValidBpm = (this.bpm !== null && this.bpm >= 5 && this.bpm <= 40)
    },
    setUserBpm() { //stores valid input as the user bpm and logs to save
      if (this.isValidBpm) {
        this.$store.commit('setBpm', (this.bpm * this.bpmMultiplier))
      }
    }
  },
  beforeRouteLeave(to, from) {
    if (to.name === 'mood') {
      return (this.isValidBpm)
    } else {
      return (true)
    }
  }
}
</script>

<style scoped>
.instructions {
  margin-bottom: 50px;
}

.nav-buttons {
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.timer-text {
  margin-bottom: 50px;
}

.to-help {
  max-width: 30px;
  text-decoration: none;
  color: white;
  display: flex;
  background-color: rgb(13, 181, 103);
  padding: 10px;
  border-radius: 50px;
  transition: opacity 0.15s;
}

.to-help:hover {
  opacity: 0.8;
}

.heartbeat-input {
  position: relative;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  background: white;
  border: 1px solid #eee;
  box-shadow: 10px 10px 0 0 rgba(black, .03);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  text-align: center;
  font-size: large;
}

.user-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 25px;
}

.input-box {
  padding: 10px;
}

.skip {
  display: flex;
  border-width: 0;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  margin: 5px;
  background-color: grey;
  transition: background-color 0.15s;
  box-shadow: 0 6px 0 0 rgb(68, 68, 68);
}

.skip:hover {
  background-color: rgb(106, 106, 106);
}

.skip:active {
  transform: translateY(3px);
  box-shadow: 0px 3px 0 0 rgb(39, 39, 39);
}

.routers {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
</style>