<template>
<!-- <ThreeScene /> -->
 <HeaderHome/>
 <div class="last-creations">
  <h2 class="text-2xl uppercase text-white">Latest creations</h2>
  <homeCarousel/>
 </div>
 <div class="spacer"></div>
</template>


<script setup>
import HeaderHome from '../components/HomeHeader.vue'
import homeCarousel from '../components/Carousel.vue'
</script>
<script>

export default {
  name: 'HomeView' 
}
</script>

<style scoped>
  .last-creations {
    background-color: #000;
    padding: 5rem;
    padding-top: 7rem;
  }

  .spacer {
    height: 100vh;
  }

</style>