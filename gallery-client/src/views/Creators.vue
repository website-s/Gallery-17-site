<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <header class="page-header">
          <h1 ref="h1" class="text-3xl" data-speed="1.2">HAMOOD</h1>
      </header>
      <p class="intro paragraph"></p>
      <div class="creator-container">
        <div class="static-img-container"><img class="static-image" src="" alt=""></div>
        <div class="creator-container">
          <img class="creator-img" src="" alt="">
          <div class="text-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor nulla in ipsum tempor interdum. Etiam eget bibendum purus. Nam convallis urna et diam facilisis efficitur. </p>
            <div class="signature">maya p.</div>
            <button>Visit creator page</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CreatorsView' 
  }
</script>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

const h1 = ref(null);

onMounted(() => {
  const tl = gsap.timeline();

  tl.fromTo(h1.value, { opacity: 0}, { opacity: 1, duration: 1.5 });
  tl.fromTo(h1.value, { x: -60 }, { x: 0, duration: .8, ease: 'power4.out'}, '-=1.5');
});

onBeforeUnmount(() => {
  const tl = gsap.timeline();
  tl.to(h1.value, { opacity: 0, duration: 1.5 });
  tl.to(h1.value, { x: 60, duration: .8, ease: 'power4.in'});
});
</script>

<style scoped>
  .page-header {
    height: 80vh;
    background-image: url(../assets/hipppo.webp);
    position: relative;
  }

  h1 {
    color: #fff;
    z-index: 1;
    position: absolute;
    bottom: 3rem;
    left: 1rem;
  }
  
  .entry-from {
      opacity: 0;
  }

  .entry-to {
      opacity: 1;
  }

  .enter-active {
      transition: opacity 8s ease;
}
</style>