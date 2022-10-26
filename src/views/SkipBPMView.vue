<template>
    <button type="button">
        <router-link to="/calc-bpm">Back</router-link>
    </button>
    <h1>Step 1: Your Estimated Heartbeat</h1>
        <p>From the drop down, select your estimated state. <br> <br>

        Heart Rate Categories: <br> <br>
        Low --> You are relaxed, in a resting state, maybe doing a calming activity<br>
        Normal--> You are doing normal activity feeling average <br>
        High --> You are stressed, maybe upset, exercising perhaps <br>
    </p>


    <form action="">

        <button type="reset" value = "Reset">
          Reset
          </button>

    </form>


    <br><br><br>
    <button type="button">
        <router-link to="/mood">Next</router-link>
      </button>
  
</template>

<script>
export default {

}
</script>

<style>

</style>