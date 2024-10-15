<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <!-- <ThreeScene /> -->
      <HeaderHome/>
      <section class="last-creations">
        <h2 class="text-2xl uppercase text-white">Latest creations</h2>
        <homeCarousel/>
      </section>
      <section class="text-section">
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
      <section class="text-section dark">
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
import HeaderHome from '../components/HomeHeader.vue'
import homeCarousel from '../components/Carousel.vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, onMounted} from 'vue';

gsap.registerPlugin(ScrollTrigger)

const galleryH2 = ref(null);
const galleryP = ref(null);
const galleryLink1 = ref(null);

const creatorsH2 = ref(null);
const creatorsP = ref(null);
const creatorsLink1 = ref(null);

let animationDone = false;
let animationDone1 = false;

onMounted(() => {
  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: creatorsH2.value,
      start: "top 60%", 
      markers: true,
      onEnter: () => {
        if (!animationDone1) {
          animationDone1 = true;
          timeline2.play();
        }
      },
      once: true
    }
  });

  timeline2.fromTo(creatorsH2.value, 
    { x: -80, opacity: 0 },
    { x: 0, duration: 1, opacity: 1, ease: 'power4.out' }
  );

  timeline2.fromTo(creatorsP.value, 
  { x: -80, opacity: 0 },
  { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
    "<+=0.1"
  );
  timeline2.fromTo(creatorsLink1.value, 
  { x: -80, opacity: 0 },
  { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
    "<+=0.2"
  );

  const timeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: galleryH2.value,
      start: "top 60%", 
      markers: true,
      onEnter: () => {
        if (!animationDone) {
          animationDone = true;
          timeline1.play();
        }
      },
      once: true
    }
  });

  timeline1.fromTo(galleryH2.value, 
    { x: -80, opacity: 0 },
    { x: 0, duration: 1, opacity: 1, ease: 'power4.out' }
  );

  timeline1.fromTo(galleryP.value, 
  { x: -80, opacity: 0 },
  { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
    "<+=0.1"
  );
  timeline1.fromTo(galleryLink1.value, 
  { x: -80, opacity: 0 },
  { x: 0, duration: 1, opacity: 1, ease: 'power4.out' },
    "<+=0.2"
  );
});

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
    border: 1px solid #00000000;
    padding: .5rem 2rem;
  }

  .link-container {
    position: relative;
    opacity: 0;
  }

  a:hover {
    background-color: #fff;
    border: 1px solid #000;
  }

  a:hover button{
    color: #000; 
  }
  .dark-a {
    background-color: #fff;
    color: #000;
    border: 1px solid #ffffff00;
    padding: .5rem 2rem;
  }
  .dark-a:hover {
    background-color: #000;
    border: 1px solid #fff;
  }

  .dark-a:hover button{
    color: #fff; 
  }

  .text-paragraph {
    width: 40%;
  }

</style>