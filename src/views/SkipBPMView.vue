<template>
    <div class="intro">
      <router-link to="/calc-bpm" class="backCalc">
        Back
      </router-link>
    </div>
    
    <h1>Step 1: Your Estimated Heartbeat</h1>
        <p>From the drop down, select your estimated state. <br> <br>

        Heart Rate Categories: <br> <br>
        Normal ==> You are relaxed, most likely seated or laying down<br>
        Raised ==> You are moving, doing some light activity like walking, not in a relaxed state <br>
        High ==> Your heart is beating hard and fast. You might be exercising or stressed <br>
    </p>

    <select 
    v-model="bpm"
    class="Heartbeat"
    @click="checkBpm()" 
    >
    <!-- ^not the greatest way to do this -->
    <option value="" selected disabled>Select an Option</option>
    <option value=55>Normal</option>
    <option value=85>Raised</option>
    <option value=110>High</option>
  </select>
  <div class="skipRouters">
    <!-- <form action="">
        <button type="reset" value = "Reset">
          Reset
        </button>
    </form> -->
    <button type="reset" value = "Reset" class="skipReset">
      Reset
    </button>
    <router-link to="/mood" @click="setBpm()" class="toMoodSkip">
      Next
    </router-link>
  </div>

  
  
</template>

<script>

export default {
  data() {
    return {
      bpm: null,
      isValidBpm: false
    }
  },
  methods: {
    checkBpm() {
      this.isValidBpm = (this.bpm >= 55 && this.bpm <= 110)
      console.log(this.isValidBpm)
    },
    setBpm() {
      if (this.isValidBpm) {
        this.$store.commit('setBpm', (this.bpm * this.bpmMultiplier))
        console.log(this.bpm)
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

<style>
  .intro {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
  }

  .backCalc,
  .skipReset,
  .toMoodSkip {
    display: flex;
    border-width: 0;
    margin: 5px;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    transition: opacity 0.15s;
    text-decoration: none;
  }

  .Heartbeat{
    position: relative;
    width: 200px;
    height: 40px;
    border-radius: 8px;
    background: white;
    border: 1px solid #eee;
    box-shadow: 10px 10px 0 0 rgba(black,.03);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    text-align: center;
    font-size: large;
  }

  .skipRouters {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
  }

  .backCalc,
  .toMoodSkip {
    background-color: rgb(10, 97, 190);
  }

  .skipReset {
    background-color: grey;
  }

</style>