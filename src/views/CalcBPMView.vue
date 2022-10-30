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













      <vue-countdown-timer
    @start_callback="startCallBack('event started')"
    @end_callback="endCallBack('event ended')"
    :start-time="'2018-10-10 00:00:00'"
    :end-time="1481450115"
    :interval="1000"
    :start-label="'Until start:'"
    :end-label="'Until end:'"
    label-position="begin"
    :end-text="'Event ended!'"
    :day-txt="'days'"
    :hour-txt="'hours'"
    :minutes-txt="'minutes'"
    :seconds-txt="'seconds'">
  </vue-countdown-timer>

</template>







<script>
import { db } from '../firebase/firebase.js'
import { doc, setDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      bpm: null
    }
  },
  methods: {
    checkBPM() {
      if(!this.bpm || this.bpm < 20 || this.bpm > 200) {
        this.bpm = null
        // print out something that tells the user 
        // they entered an invalid value
      }
      this.setBpmInFB()
    },
    async setBpmInFB() {
      const docRef = doc(db, "BPM-moods", "UserData")
      await setDoc(docRef, { bpm: this.bpm }, { merge: true })        
    }
  }
}



</script>

<style>


</style>

