<template>
  <div class="page">
    <div class="back-button">
      <BackButtonComp />
    </div>
    <div class="intro">
      <h1>Mood Help</h1>
      <p>
        Below are more detailed descriptions of our list of moods. <br>
      </p>
    </div>

    <div class="written-moods">
      <p>
        1. Calm -- not showing any emotions <br>
        2. Happy -- feeling or showing pleasure or contentment <br>
        3. Nervous -- easily agitated or alarmed, anxious, high strung <br>
        4. Annoyed -- irritated, bothered <br>
        5. Sad -- unhappy, feeling or showing sorrow<br>
        6. Angry -- feeling and showing hostility and displeasure <br>
        7. Sleepy -- tired, needing sleep <br>
        8. Heartbroken -- suffering from overwhelming distress <br>
      </p>
    </div>
  </div>
</template>

<script>
import BackButtonComp from '@/components/BackButtonComp.vue'

export default {
  components: { BackButtonComp }
}

</script>
  
<style scoped>
.written-moods {
  text-align: center;
}
.back-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>