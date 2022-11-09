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
    <option value="Happy">Happy</option>
    <option value="Relaxed">Relaxed</option>
    <option value="Nervous">Nervous</option>
    <option value="Annoyed">Annoyed</option>
    <option value="Sad">Sad</option>
    <option value="Surprised">Surprised</option>
    <option value="Angry">Angry</option>
    <option value="Confused">Confused</option>
    <option value="Sleepy">Sleepy</option>
    <option value="Hurt">Hurt</option>
  </select>
  <button @click="setMood()">Submit</button>

  <button>
    <router-link to="/playlist-output">Next</router-link>
  </button>
  <button type="reset" value = "Reset">
    Reset
  </button>
</template>

<script>

export default {
  data() {
    return {
      mood: null,
    }
  },
  methods: {     
    setMood() {
      if(this.mood != null) {
        console.log(this.mood)
        this.emitter.emit('user-mood', this.mood)
      }
    }
  }
}
</script>

<style>

</style>