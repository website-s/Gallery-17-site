<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <HeaderHome/>
      <section class="last-creations">
        <h2 class="text-2xl uppercase text-white">Latest creations</h2>
        <homeCarousel/>
      </section>
      <section class="text-section" ref="scene1">
        <div data-speed="0.9">
          <h2 ref="creatorsH2" class="text-2xl uppercase mb-2">creators</h2>
          <p ref="creatorsP" class="text-paragraph mb-10 transparent">Discover unique talents revealing their authentic vision and exceptional craftsmanship. Immerse yourself in distinctive worlds and be captivated by exclusive creations and designs, where originality and excellence take center stage.</p>
          <div ref="creatorsLink1" class="link-container">
            <RouterLink to="/creators">
              <button class="uppercase text-lg">Creators</button>
            </RouterLink>
          </div>
        </div>
      </section>
      <section class="text-section dark" ref="scene2">
        <div data-speed="1.1">
          <h2 ref="galleryH2" class="text-2xl uppercase mb-2">The gallery</h2>
          <p ref="galleryP" class="text-paragraph mb-10 transparent">Discover Gallery17, the virtual gallery celebrating creators from all horizons. Each talent unveils a unique vision and authentic craftsmanship.</p>
          <div ref="galleryLink1" class="link-container">
            <RouterLink to="/about" class="dark-a">
              <button class="uppercase text-lg">About us</button>
            </RouterLink>
            <RouterLink to="/contact" class="dark-a ml-5">
              <button class="uppercase text-lg">contact</button>
            </RouterLink>
          </div>
        </div>
      </section>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderHome from '../components/HomeHeader.vue'
import homeCarousel from '../components/Carousel.vue'


const scene1 = ref(null);
const creatorsH2 = ref(null);
const creatorsP = ref(null);
const creatorsLink1 = ref(null);
const scene2 = ref(null);
const galleryH2 = ref(null);
const galleryP = ref(null);
const galleryLink1 = ref(null);

let ctx; // Contexte GSAP
let observer1, observer2;

onMounted(() => {
  // Initialiser le contexte GSAP
  ctx = gsap.context((self) => {
    // Animation pour `scene1`
    const scene1Anim = gsap.timeline({ paused: true });
      scene1Anim.fromTo(
        self.selector(creatorsH2.value),
        { x: -50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' }
      )
      scene1Anim.fromTo(
        self.selector(creatorsP.value),
        { x: -50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' },
        "<+=0.1"
      );
      scene1Anim.fromTo(
        self.selector(creatorsLink1.value),
        { x: -50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' },
        "<+=0.25"
      );

      // Définir l'animation de `scene2`
    const scene2Anim = gsap.timeline({ paused: true }); // L'animation est contrôlée manuellement
    scene2Anim.fromTo(
      self.selector(galleryH2.value),
      { x: -50, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: 'power4.out' }
    );
    scene2Anim.fromTo(
      self.selector(galleryP.value),
      { x: -50, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: 'power4.out' },
      "<+=0.1"
    );
    scene2Anim.fromTo(
      self.selector(galleryLink1.value),
      { x: -50, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: 'power4.out' },
      "<+=0.25"
    );

    observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jouer l'animation lorsque `scene1` entre dans le viewport
          if (scene1Anim.reversed()) {
            scene1Anim.play();
          } else {
            scene1Anim.restart();
          }
        } else {
          // Revenir en arrière lorsque `scene1` quitte le viewport
          scene1Anim.reverse();
        }
      },
      { threshold: 0.4 }
    );
    observer1.observe(scene1.value);

    // Intersection Observer pour `scene2`
    observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jouer l'animation lorsque `scene2` entre dans le viewport
          if (scene2Anim.reversed()) {
            scene2Anim.play();
          } else {
            scene2Anim.restart();
          }
        } else {
          // Revenir en arrière lorsque `scene2` quitte le viewport
          scene2Anim.reverse();
        }
      },
      { threshold: 0.4 }
    );
    observer2.observe(scene2.value);
  }, document.body);
});

onUnmounted(() => {
  // Nettoyer les animations lors du démontage
  ctx?.revert();
  observer1?.disconnect();
  observer2?.disconnect();});
</script>
<script>
export default {
  name: 'HomeView' 
}
</script>

<style scoped>
  .last-creations {
    background-color: #000;
    padding: 7rem 5rem;
  }

  .spacer {
    height: 100vh;
  }

  a {
    background-color: #000;
    color: #fff;
    border: 1.5px solid #00000000;
    padding: .5rem 2rem;
  }

  .link-container {
    position: relative;
    opacity: 0;
  }

  a:hover {
    background-color: #fff;
    border: 1.5px solid #000;
  }

  a:hover button{
    color: #000; 
  }
  .dark-a {
    background-color: #fff;
    color: #000;
    border: 1.5px solid #ffffff00;
    padding: .5rem 2rem;
  }
  .dark-a:hover {
    background-color: #000;
    border: 1.5px solid #fff;
  }

  .dark-a:hover button{
    color: #fff; 
  }

  .text-paragraph {
    width: 40%;
  }

</style>