<template>
  <div class="page">
    <h1>Mood Help</h1>
    <p>
      Below are more detailed descriptions of our list of moods. <br>
      <br>
      1. Calm -- not showing any emotions <br>
      2. Happy -- feeling or showing pleasure or contentment <br>
      3. Nervous -- easily agitated or alarmed, anxious, high strung <br>
      4. Annoyed -- irritated, bothered <br>
      5. Sad -- unhappy, feeling or showing sorrow<br>
      6. Angry -- feeling and showing hostility and displeasure <br>
      7. Sleepy -- tired, needing sleep <br>
      8. Heartbroken -- suffering from overwhelming distress <br>
    </p>

    <router-link to="/mood" class="back">
      Back
    </router-link>
  </div>
</template>
      
<script>
export default {

}
</script>
  
<style scoped>
.page {
  position: relative;
  top: 50px;
}

.back {
  background-color: rgb(10, 97, 190);
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 3px;
  transition: opacity 0.15s;
}

.back:hover {
  opacity: 0.8;
}
</style>