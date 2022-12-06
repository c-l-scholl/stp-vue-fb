<template>
  <div class="intro">
    <BackButtonComp />
    <router-link to="/mood-help" class="to-mood-help">
      <img src="../images/icons8-question-mark-30.png">
    </router-link>
    <!-- Question Mark icon by Icons8: https://icons8.com -->
  </div>
  <div class="page">
    <h1>Step 2: Your Mood</h1>
    <p>
      Pick your current or desired mood. <br>
      For a detailed description of the moods, please click the ? above.
    </p>

    <!--sets possible values for mood drop down -->
    <select name="Mood" id="Mood" class="mood" value="" v-model="mood" @click="checkMood()">
      <option value="" selected disabled > Select an Option</option>
      <option value="Happy">Happy</option>
      <option value="Relaxed">Relaxed</option>
      <option value="Nervous">Nervous</option>
      <option value="Annoyed">Annoyed</option>
      <option value="Sad">Sad</option>
      <option value="Angry">Angry</option>
      <option value="Sleepy">Sleepy</option>
      <option value="Heartbroken">Heartbroken</option>
    </select>
    <br>
    <div class="mood-routers">
      <router-link to="/playlist-output" @click="setMood()" class="to-playlist"
        :class="{ 'disabled': !this.isValidMood }">
        Next
      </router-link>
      <!-- Next button created, disabled until a mood is selected -->
    </div>
  </div>
</template>

<script>
import BackButtonComp from '../components/BackButtonComp.vue'
export default {
  data() {
    return {
      mood: null, //mood starts as empty
      isValidMood: false //starts as not valid entry to lock next button
    }
  },
  components: { BackButtonComp },
  methods: {
    checkMood() {
      this.isValidMood = (this.mood !== null) //is the mood a valid selection from our list?
    },
    setMood() {
      if (this.isValidMood) {
        console.log(this.mood)
        this.$store.commit('setMood', this.mood) //if so, log to console and save input for algorithm
      }
    },
  },
  beforeRouteLeave(to, from) {
    if (to.name === 'playlist-output') {
      return (this.isValidMood)
    } 
    return (true)
  },
}
</script>

<style scoped>
.page {
  top: 50px;
}
.mood-routers {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
}
.intro {
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.to-playlist {
  display: flex;
  border-width: 0;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  transition: opacity 0.15s;
  text-decoration: none;
  background-color: rgb(10, 97, 190);
}
.to-mood-help {
  display: flex;
  border-width: 0;
  margin: 5px;
  padding: 10px;
  border-radius: 30px;
  color: white;
  transition: opacity 0.15s;
  text-decoration: none;
  background-color: rgb(13, 181, 103);
}
.to-mood-help:hover {
  opacity: 0.8;
}
.mood {
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
.disabled {
  cursor: not-allowed;
  opacity: 0.2;
}
</style>