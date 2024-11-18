<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div ref="scene1" class="scene scene1">
        <div data-speed="1.3" class="text-container">
          <h2 ref="scene1H2" class="text-2xl">concept</h2>
          <p ref="scene1P">
            Découvrez Gallery17, la galerie virtuelle qui célèbre les créateurs
            et créatrices. Chaque talent y dévoile une vision unique et un
            savoir-faire authentique. Plongez dans leurs univers singuliers et
            laissez vous séduire par des créations et des designs exclusifs,
            où l'originalité et l'excellence prennent le devant de la scène.
          </p>
        </div>
      </div>
      <div ref="scene2" class="scene scene2">
        <div data-speed="1.3" class="text-container">
          <h2 ref="scene2H2" class="text-2xl">Démarche</h2>
          <p ref="scene2P">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            porttitor nulla in ipsum tempor interdum. Etiam eget bibendum
            purus. Nam convallis urna et diam facilisis efficitur.
          </p>
        </div>
      </div>
      <div class="spacer"></div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { ref, onMounted, onUnmounted } from 'vue';


const scene1 = ref(null);
const scene1H2 = ref(null);
const scene1P = ref(null);
const scene2 = ref(null);
const scene2H2 = ref(null);
const scene2P = ref(null);

let ctx; // Contexte GSAP
let observer1, observer2;

onMounted(() => {
  // Initialiser le contexte GSAP
  ctx = gsap.context((self) => {
    // Animation pour `scene1`
    const scene1Anim = gsap.timeline({ paused: true });
      scene1Anim.fromTo(
        self.selector(scene1H2.value),
        { x: -50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' }
      )
      scene1Anim.fromTo(
        self.selector(scene1P.value),
        { x: -50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' },
        "<+=0.3"
      );

      // Définir l'animation de `scene2`
    const scene2Anim = gsap.timeline({ paused: true }); // L'animation est contrôlée manuellement
    scene2Anim.fromTo(
      self.selector(scene2H2.value),
      { x: 50, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: 'power4.out' }
    );
    scene2Anim.fromTo(
      self.selector(scene2P.value),
      { x: 50, opacity: 0 },
      { x: 0, duration: 2, opacity: 1, ease: 'power4.out' },
      "<+=0.3"
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
      { threshold: 0.7 }
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
      { threshold: 0.6 }
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
  name: 'AboutView' 
}
</script>

<style>

.scene {
  width: 100vw;
  height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
}
.scene1 {
  background-image: url(../assets/about/rendupc2.jpg);
}

.scene2 {
  background-image: url(../assets/about/rendupc2.jpg);
  flex-direction: row-reverse;
}

.text-container {
  color: white;
  width: 45%;
  padding: 0 10%;
}

h2 {
  margin-bottom: 1rem;
  text-transform: uppercase;
  opacity: 0;
}

p {
  font-weight: 400;
  opacity: 0;
}

@media screen and (max-width: 1025px) {
  .scene {
    background-position: bottom center;
    align-items: start;
    padding-top: 13rem;
  }

  .text-container {
    width: 100%;
    padding: 0 10%;
  }
  
  .scene1 {
    background-image: url(../assets/about/renduipad1.jpg);
  }
  
  .scene2 {
    background-image: url(../assets/about/renduipad1.jpg);
  }
}

</style>