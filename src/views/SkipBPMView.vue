<template>
    <button type="button">
        <router-link :to="{name: 'calc-bpm'}">Back</router-link>
    </button>
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
    >
    <option value="" selected disabled>Select an Option</option>
    <option value=55>Normal</option>
    <option value=85>Raised</option>
    <option value=110>High</option>
  </select>
    <form action="">
        <button type="reset" value = "Reset">
          Reset
        </button>
    </form>
    <button @click="setBpm()">Submit</button>


    <br><br><br>
    <button type="button">
        <router-link :to="{name: 'mood'}">Next</router-link>
      </button>
  
</template>

<script>

export default {
  data() {
    return {
      bpm: null,
    }
  },
  methods: {
    setBpm() {
      this.emitter.emit('user-bpm', this.bpm)
      console.log(this.bpm)
    }
  }
}

</script>

<style>

</style>