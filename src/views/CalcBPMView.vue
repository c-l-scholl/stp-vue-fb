<template>
  <button type="button" onclick="document.location='index.html'">Back</button>

  <button type="button" onclick="document.location='BPMHelp.html'">
    Help
  </button>
  <h1>Step 1: Your Heartbeat</h1>

  <p> Enter your heartbeat. <br /> <br>
        Follow these steps: <br>

        <br>
        1. Using you index and middle fingers together, find your pulse in your wrist or neck
        <br>
        2. Start a timer for 15 seconds on your phone, computer, watch or simply have a friend count
        
        <br>

        3.  Now, take that number of beats and multiply it by 4

        <br>

        4.  Done! Now you have your heartbeat. 


        <br>
        <br>
        Was this too confusing? <br>
        No problem, click the above "Help" button for more details and a video. <br><br>
        Don't want to do it? <br>
        No problem too! Click the "Skip" button below to enter an estimation. 

    <br> <br>
      </p>


      <!-- <form<label for="Heartbeat">Heartbeat (BPM):</label> -->
      <!-- <input type="number" id="Heartbeat" name="Heartbeat" placeholder="" min="20" max="200" step=1/>

      <input type="submit" value="Submit" id = "Submit" onclick="btnFunction();revFunction(); myfunc(); check(); submitResetIfNeeded()"> </form>  -->

      <p>
        Note: This value must be a whole number, at least two digits, no more than three.

      </p>

        <br>
        <br>
</template>

<script>
export default {
  data() {
    return {
      bpm: null
    }
  }
}
</script>

<style>

</style>