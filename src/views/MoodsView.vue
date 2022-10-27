<template>
  <button type="button">
    Back
  </button>
  <button type="button">
    Help
  </button>
  <h1>Step 2: Your Mood</h1>
  <p>
    Pick your current or desired mood. <br>
    For a detailed description of the moods, please click the "Help" button above.
  </p>
  <br>
  <label for="Mood"> Choose the best descriptor of your mood:</label>

  <select 
    name="Mood" 
    id="Mood" 
    value=""
    v-model="mood"
    >
    <option value="" selected disabled>Select an Option</option>
    <option value="Calm">Calm</option>
    <option value="Happy">Happy</option>
    <option value="Silly">Silly</option>
    <option value="Relaxed">Relaxed</option>
    <option value="Nervous">Nervous</option>
    <option value="Annoyed">Annoyed</option>
    <option value="Sad">Sad</option>
    <option value="Shy">Shy</option>
    <option value="Surprised">Surprised</option>
    <option value="Hungry">Hungry</option>
    <option value="Angry">Angry</option>
    <option value="Confused">Confused</option>
    <option value="Sleepy">Sleepy</option>
    <option value="Sick">Sick</option>
    <option value="Hurt">Hurt</option>
    <option value="Hot">Hot</option>
  </select>
  <button @click="setMoodinFB()">Submit</button>

  <button disabled id="btnNext" type="button">
    Next
  </button>
  <button id="relbtn" type="button">
    Reset
  </button>
</template>

<script>
import { db } from '../firebase/firebase.js'
import { doc, setDoc } from 'firebase/firestore'

export default {
  data() {
    return {
      mood: null,
    }
  },
  methods: {
    async setMoodinFB() {
      if(this.mood !== null) {
        console.log(this.mood)
        const docRef = doc(db, "BPM-moods", "UserData")
        await setDoc(docRef, { mood1: this.mood }, { merge: true })  
      }
            
    }
  }
}
</script>

<style>

</style>