<template>
  <div class="helpButton">
    <router-link to="/bpm-help" class="toHelp">
      ?
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
    <!-- <div class="intro">
      <h3>Don't know how? </h3>

    </div> -->

    <div class="timerText">
      <h3>Click Start Timer when ready. </h3>
    </div>
    <TimerComp />


    <div class="userInput">
      <div class="inputBox">
        <label for="Heartbeat">Number of beats: </label>
        <input v-model="bpm" type="number" class="heartbeat-input" placeholder="*ba-dump*" step=1 @input="checkBpm" />
      </div>
      <!-- creates input entry box, checking input against method below, looking for valid entry -->

      <div class="nextButton">
        <router-link to="/mood" @click="setUserBpm" class="toMood" :class="{ 'disabled': !this.isValidBpm }">
          Next
        </router-link>
      </div>
      <!-- Button disabled if no entry or not in valid range-->

    </div>

    <div class="skipText">
      <!-- <p>
        Don't want to do it?
        No problem! 
      </p>
      <p>Click the "Skip" button below to enter an estimation.</p> -->
    </div>
    <div class="routers">
      <router-link to="/skip-bpm" class="skip">
        Skip
      </router-link>
      <!-- <router-link
      to="/mood"
      v-slot="{href, navigate}"
    >
      <button :href="href" @click="navigate" class='toMoodButton' :disabled="!isValidBpm">
        Next
      </button>
    </router-link> -->

    </div>
  </div>



</template>

<script>
import TimerComp from '../components/TimerComp.vue' 
//pulls in text based timer created in separate vue 


//https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
export default {
  data() {
    return {
      bpm: null, //sets bpm entry as empty from start
      bpmMultiplier: 4, //because 15 second timer, standardizes input to beats per minute
      isValidBpm: false //boolean watcher set to ensure next button starts as disabled
    }
  },
  components: {
    TimerComp
  },
  methods: {
    checkBpm() { //is bpm in valid human range and is it an entered value?
      this.isValidBpm = (this.bpm !== null && this.bpm >= 5 && this.bpm <= 40)
    },
    setUserBpm() { //stores valid input as the user bpm and logs to save
      if (this.isValidBpm) {
        this.$store.commit('setBpm', (this.bpm * this.bpmMultiplier))
        console.log(this.bpm)
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
.page {
  position: relative;
  top: 50px;
}

.intro {
  align-items: center;

}

.instructions {
  margin-bottom: 50px;
}

.helpButton {
  position: absolute;
  top: 10px;
  right: 10px;
}

.intro h3 {
  display: flex;
  margin-right: 15px;
}

.timerText {
  margin-bottom: 50px;
}

.toHelp {
  max-width: 50px;
  text-decoration: none;
  color: white;
  display: flex;
  background-color: rgb(13, 181, 103);
  padding: 10px 15px;
  border-radius: 30px;
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

.userInput {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  margin-top: 25px;
}

.inputBox {
  padding: 10px;
}


.toMood,
.skip {
  display: flex;
  border-width: 0;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  transition: opacity 0.15s;
}


.routers {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

}

.toMood,
.skip {
  color: white;
  text-decoration: none;
  margin: 5px;
}

.toMood {
  background-color: blue;
}

.disabled {
  cursor: not-allowed;
  opacity: 0.2;
}

.skip {
  background-color: grey;
}

.canPress {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>

