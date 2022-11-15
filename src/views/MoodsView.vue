<template>
  <div class="intro">
    <router-link to="/calc-bpm" class="backCalc">
      Back
    </router-link>
    <router-link to="/mood-help" class="toMoodHelp">
      Help
    </router-link>
  </div>
  
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
    <option value="Angry">Angry</option>
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
        this.$store.commit('setMood', this.mood)
      }
    },
  }
}
</script>

<style>
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
  }

  .backCalc,
  .toMoodHelp {
    display: flex;
    border-width: 0;
    margin: 5px;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    transition: opacity 0.15s;
    text-decoration: none;
  }

  .backCalc {
    background-color: rgb(10, 97, 190);
  }

  .toMoodHelp {
    background-color: rgb(13, 181, 103);
  }

  .backCalc:hover,
  .toMoodHelp:hover {
    opacity: 0.8;
  }

</style>