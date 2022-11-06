<template>
  <div>
    <div :key="song.id" v-for="song in songs">
      <SingleSongComp 
        :song="song">
      </SingleSongComp>

    </div>
    <!-- <SingleSongComp songName="Great Mistakes"></SingleSongComp> -->
  </div>

</template>
  
<script>
import SingleSongComp from './SingleSongComp.vue'


export default {
  data() {
    return {
      showModal: false
    }
  },
  props: {
    songs: Array
  },
  components: {
    SingleSongComp,
  },
  emits: [],
  methods: {
    
  }
}
</script>