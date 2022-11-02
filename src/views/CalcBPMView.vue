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

  <p> Enter your heartbeat using the 15 second timer below.  <br />
    Click Start when ready. <br>
    
        <br>
        <button type="button" @click="timeleft=15">
        Start Timer
        </button>

        <p>  <span id="countdowntimer2">0 </span> Seconds Remaining</p>

        <br>
      </p>
        <form
        @submit.prevent="checkBPM()" 
      >
        <label for="Heartbeat">Heartbeat (BPM):</label>
        <input 
          v-model="bpm"
          type="number" 
          class="Heartbeat" 
          placeholder="Enter Heartbeat" 
          step=1/>

          <button type="reset" value = "Reset">
          Reset
          </button>
        </form>
        <br><br><br><br>
       
        Click the above "Help" button for more details and a video. <br><br>
        Don't want to do it? <br>
        No problem too! Click the "Skip" button below to enter an estimation. 

    <br> <br>

      <button type="button">
        <router-link to="/skip-bpm">Skip</router-link>
      </button>

      <button type="button">
        <router-link to="/mood">Next</router-link>
      </button>

</template>







<script>
import { db } from '../firebase/firebase.js'
import { doc, setDoc } from 'firebase/firestore' // why no work
import { TimerComp } from '../components/TimerComp.vue'


export default {
  data() {
    return {
      bpm: null,
      countdown: 10
    }
  },
  components: {
    TimerComp
  },
  methods: {
    countDownTimer () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    checkBPM() {
      if(!this.bpm || this.bpm < 20 || this.bpm > 200) {
        this.bpm = null
        // print out something that tells the user 
        // they entered an invalid value
      }
      //this.setBpmInFB()
      this.emitter.emit("user-bpm", this.bpm)
    },
    async setBpmInFB() {
      const docRef = doc(db, "BPM-moods", "UserData")
      await setDoc(docRef, { bpm: this.bpm }, { merge: true })        
    },
    created () {
      this.countDownTimer()
    },
  }
}

// https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
  var timeleft = 0;
  var downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById("countdowntimer2").textContent = timeleft;
  if(timeleft <= 0)
      clearInterval(downloadTimer);
  },1000);


</script>

<style>


</style>

