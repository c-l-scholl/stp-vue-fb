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

  <div>
    <TimerComp />
  </div>

  <label for="Heartbeat">Number of beats: </label>
  <input v-model="bpm" 
    type="number" 
    class="Heartbeat" 
    placeholder="*ba-dump*" 
    step=1 
    @input="checkBpm"
  />

  <br><br><br><br>

  Don't want to do it? <br>
  No problem too! Click the "Skip" button below to enter an estimation.

  <br> <br>
  <div class="routers">
    <router-link to="/skip-bpm" class="skip">
      Skip
    </router-link>

    
    <router-link 
      to="/mood" 
      @click="setUserBpm" 
      class="toMood" 
      :class="{ 'disabled': !this.isValidBpm }"
    >
      Next
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
    

</template>

<script>
import TimerComp from '../components/TimerComp.vue'


//https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
export default {
  data() {
    return {
      bpm: null,
      bpmMultiplier: 4,
      isValidBpm: false
    }
  },
  components: {
    TimerComp
  },
  methods: {
    checkBpm() {

      this.isValidBpm = (this.bpm !== null && this.bpm >= 5 && this.bpm <= 40) 
    }, 
    setUserBpm() {
      if(this.checkBpm()) { 
        this.$store.commit('setBpm', (this.bpm * this.bpmMultiplier))
        console.log(this.bpm)
      } 
    }
  },
  beforeRouteLeave (to, from) {
    if(to.name === 'mood') {
      return this.checkBpm()
    } else {
      return true
    }
    
  }

}


</script>

<style scoped>
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
  .start,
  .toMood, 
  .skip {
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

