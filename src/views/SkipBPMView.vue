<template>
  <div class="page">
    <div class="intro">
      <BackButtonComp />
    </div>
    <h1>Step 1: Your Estimated Heartbeat</h1>
    <p>From the drop down, select your estimated state. <br> <br>
      Heart Rate Categories: <br> <br>
      Normal: You are relaxed, most likely seated or laying down<br><br>
      Raised: You are moving, doing some light activity like walking, not in a relaxed state <br><br>
      High: Your heart is beating hard and fast. You might be exercising or stressed <br><br>
    </p>
    <select v-model="bpm" class="heartbeat" placeholder="Select an Option" @change="checkBpm()">
      <!-- ^not the greatest way to do this -->
      <!-- Assigning bpm values to categorical selections to use check bpm again -->
      <option value="" selected disabled>Select an Option</option>
      <option value=55>Normal</option>
      <option value=85>Raised</option>
      <option value=110>High</option>
    </select>
    <div class="skip-routers">
      <router-link to="/mood" @click="setBpm()" class="next-button" :class="{ 'disabled': !this.isValidBpm }">
        Next
      </router-link>
    </div>
  </div>

</template>

<script>
import BackButtonComp from '@/components/BackButtonComp.vue'
export default {
  data() {
    return {
      bpm: null, //bpm starts as empty
      isValidBpm: false //bpm starts as not valid to lock next button
    }
  },
  components: { BackButtonComp },
  methods: {
    checkBpm() {
      this.isValidBpm = (this.bpm >= 55 && this.bpm <= 110)
      console.log(this.isValidBpm) //if valid, log to console and save for algorithim 
    },
    setBpm() {
      if(this.isValidBpm) {
        this.$store.commit('setBpm', this.bpm)
        //if valid, log selection to console and save for algorithim
      }
    }
  },
  beforeRouteLeave(to, from) {
    if (to.name === 'mood') {
      return this.isValidBpm
    } else {
      return true
    }
  }
}
</script>

<style scoped>
.intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.to-mood-skip {
  display: flex;
  border-width: 0;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 5px;
  color: white;
  transition: opacity 0.15s;
  text-decoration: none;
}

.heartbeat {
  position: relative;
  width: 200px;
  height: 40px;
  border-radius: 8px;
  background: white;
  border: 1px solid rgb(0, 0, 0);
  box-shadow: 10px 10px 0 0 rgba(black, .03);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-sizing: border-box;
  text-align: center;
  font-size: large;
}

.skip-routers {
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
}

.to-mood-skip {
  background-color: rgb(10, 97, 190);
}

.disabled {
  cursor: not-allowed;
  opacity: 0.2;
}
</style>