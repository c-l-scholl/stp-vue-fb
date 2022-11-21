<template>
  <div class="intro">
      <router-link to="/calc-bpm" class="backCalc">
        Back
      </router-link>
      <router-link to="/mood-help" class="toMoodHelp">
        ?
      </router-link>
    </div>
  <div class="page">
    

    <h1>Step 2: Your Mood</h1>
    <p>
      Pick your current or desired mood. <br>
      For a detailed description of the moods, please click the ? above.
    </p>

    <select name="Mood" id="Mood" class="mood" value="" v-model="mood" placeholder = "Select an Option">
      <option value="" selected disabled>Select an Option</option>
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
    <div class="moodRouters">
      <button type="reset" value="Reset" class="moodReset">
        Reset
      </button>
      <router-link to="/playlist-output" @click="setMood()" class="toPlaylist"
        :class="{ 'disabled': !this.isValidMood }">
        Next
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "MoodsView",
  data() {
    return {
      mood: null,
      isValidMood: false
    }
  },
  methods: {
    checkMood() {
      this.isValidMood = (this.mood !== null)
    },
    setMood() {
      if (this.isValidMood) {
        console.log(this.mood)
        this.$store.commit('setMood', this.mood)
      }
    },
  },
  beforeRouteLeave(to, from) {
    if (to.name === 'playlist-output') {
      return this.isValidMood
    } else {
      return true
    }
  },
  updated() {
    this.isValidMood = (this.mood !== null)
  }

}
</script>

<style scoped>
.page {
  top: 50px;
}
.moodRouters {
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

.backCalc,
.toMoodHelp,
.toPlaylist,
.moodReset {
  display: flex;
  border-width: 0;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  transition: opacity 0.15s;
  text-decoration: none;
}

.backCalc,
.toPlaylist {
  background-color: rgb(10, 97, 190);
}

.toMoodHelp {
  background-color: rgb(13, 181, 103);
  border-radius: 50px;
}

.moodReset {
  background-color: grey;
}

.backCalc:hover,
.toMoodHelp:hover {
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