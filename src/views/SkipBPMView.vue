<template>
    <button type="button">
        <router-link :to="{name: 'calc-bpm'}">Back</router-link>
    </button>
    <h1>Step 1: Your Estimated Heartbeat</h1>
        <p>From the drop down, select your estimated state. <br> <br>

        Heart Rate Categories: <br> <br>
        Low --> You are relaxed, in a resting state, maybe doing a calming activity<br>
        Normal--> You are doing normal activity feeling average <br>
        High --> You are stressed, maybe upset, exercising perhaps <br>
    </p>

    <select 
    name="BPM" 
    id="BPM" 
    value=""
    v-model="bpm"
    type="number" 
    class="Heartbeat"
    >
    <option value="" selected disabled>Select an Option</option>
    <option value=60>Low</option>
    <option value=80>Normal</option>
    <option value=120>High</option>
  </select>
    <form action="">
        <button type="reset" value = "Reset">
          Reset
        </button>
    </form>
    <button @click="setBpmInFB()">Submit</button>


    <br><br><br>
    <button type="button">
        <router-link :to="{name: 'mood'}">Next</router-link>
      </button>
  
</template>

<script>

import { db } from '../firebase/firebase.js'
import { doc, setDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      bpm: null,
    }
  },
  methods: {
    async setBpmInFB() {
      console.log(this.bpm)
      const docRef = doc(db, "BPM-moods", "UserData")
      await setDoc(docRef, { bpm: this.bpm }, { merge: true })        
    }
  }
}

</script>

<style>

</style>