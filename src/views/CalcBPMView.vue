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

  <p> Enter your heartbeat. <br /> <br>
        Follow these steps: <br>

        <br>
        1. Using you index and middle fingers together, find your pulse in your wrist or neck
        <br>
        2. Start a timer for 15 seconds on your phone, computer, watch or simply have a friend count
        
        <br>

        3.  Now, take that number of beats and multiply it by 4

        <br>

        4.  Done! Now you have your heartbeat. 


        <br>
        <br>
        Was this too confusing? <br>
        No problem, click the above "Help" button for more details and a video. <br><br>
        Don't want to do it? <br>
        No problem too! Click the "Skip" button below to enter an estimation. 

    <br> <br>
      </p>

      <!-- need to implement these  -->

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

      

      <p>
        Note: This value must be a whole number, at least two digits, no more than three.

      </p>

        <br>
        <br>
      

      <button type="button">
        <router-link to="/skip-bpm">Skip</router-link>
      </button>

      <button type="button">
        <router-link to="/mood">Next</router-link>
      </button>

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