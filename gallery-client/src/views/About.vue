<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div ref="scene0" class="scene scene0">
          <h1 ref="scene0H2" class="about-h1"></h1>
      </div>
      <div ref="scene1" class="scene scene1">
        <div data-speed="1.3" class="text-container">
          <h2 ref="scene1H2" class="text-xl md:text-2xl">Mission</h2>
          <div ref="scene1P" class="p-container">
            <p>Gallery17 a pour mission de célébrer la créativité et l’authenticité. Nous offrons une plateforme où chaque talent peut présenter ses œuvres, son univers et son savoir-faire.</p>
            <p>En explorant notre galerie, vous découvrirez des créations exclusives et des univers artistiques uniques, soigneusement sélectionnés pour leur originalité et leur qualité exceptionnelle.</p>
          </div>
        </div>
      </div>
      <div ref="scene2" class="scene scene2">
        <div data-speed="1.3" class="text-container">
          <h2 ref="scene2H2" class="text-xl md:text-2xl">Vision</h2>
          <div ref="scene2P" class="p-container">
            <p>Chez Gallery17, nous mettons en avant l’authenticité et la diversité artistique. Notre objectif est de donner une tribune aux visions uniques des créateurs, en révélant des récits à travers leurs œuvres.</p>
            <p>Nous sommes convaincus que l’art et le design enrichissent notre façon de voir le monde et stimulent des échanges enrichissants. En soutenant les talents émergents, nous favorisons un environnement où la créativité peut s’épanouir pleinement et librement.</p>
          </div>
        </div>
      </div>
      <div ref="scene3" class="scene scene3">
        <div data-speed="1.3" class="text-container">
          <h2 ref="scene3H2" class="text-xl md:text-2xl">Valeures</h2>
          <div ref="scene3P" class="p-container">
            <p>La collaboration est un pilier fondamental de Gallery17. Nous accompagnons les créateurs dans la mise en valeur de leurs œuvres tout en leur offrant une visibilité alignée sur leurs objectifs.</p>
            <p>Notre plateforme est conçue comme un espace de synergie et de partage, où chaque collaboration ouvre la porte à de nouvelles expressions artistiques. Ensemble, nous construisons une communauté qui célèbre l’excellence, l’originalité et l’innovation.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from 'gsap';
import { ref, onMounted, onUnmounted } from 'vue';


const scene0 = ref(null);
const scene0H2 = ref(null);
const scene1 = ref(null);
const scene1H2 = ref(null);
const scene1P = ref(null);
const scene2 = ref(null);
const scene2H2 = ref(null);
const scene2P = ref(null);
const scene3 = ref(null);
const scene3H2 = ref(null);
const scene3P = ref(null);

let ctx; // Contexte GSAP
let observer0, observer1, observer2, observer3;

onMounted(() => {
  // Initialiser le contexte GSAP
  ctx = gsap.context((self) => {
    // Animation pour `scene1`
    const scene0Anim = gsap.timeline({ paused: true });
      scene0Anim.fromTo(
        self.selector(scene0H2.value),
        { y: -50, opacity: 0 },
        { y: 0, duration: 2, opacity: 1, ease: 'power4.out' }
      )
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
    const scene3Anim = gsap.timeline({ paused: true });
      scene3Anim.fromTo(
        self.selector(scene3H2.value),
        { x: -50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' }
      )
      scene3Anim.fromTo(
        self.selector(scene3P.value),
        { x: -50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' },
        "<+=0.3"
      );

    observer0 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jouer l'animation lorsque `scene1` entre dans le viewport
          if (scene0Anim.reversed()) {
            scene0Anim.play();
          } else {
            scene0Anim.restart();
          }
        } else {
          // Revenir en arrière lorsque `scene1` quitte le viewport
          scene0Anim.reverse();
        }
      },
      { threshold: 0.7 }
    );
    observer0.observe(scene0.value);

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
    observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jouer l'animation lorsque `scene2` entre dans le viewport
          if (scene3Anim.reversed()) {
            scene3Anim.play();
          } else {
            scene3Anim.restart();
          }
        } else {
          // Revenir en arrière lorsque `scene2` quitte le viewport
          scene3Anim.reverse();
        }
      },
      { threshold: 0.6 }
    );
    observer3.observe(scene3.value);
  }, document.body);
});

onUnmounted(() => {
  // Nettoyer les animations lors du démontage
  ctx?.revert();
  observer0?.disconnect();
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

.about-h1 {
  background-image: url(../assets/about/logo.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.scene0 {
  background-image: url(../assets/about/top-bg.jpg);
}

.scene1 {
  background-image: url(../assets/about/rendupc1.jpg);
}

.scene2 {
  background-image: url(../assets/about/rendupc2.jpg);
  flex-direction: row-reverse;
}

.scene3 {
  background-image: url(../assets/about/rendupc3.jpg);
}

.text-container {
  color: white;
  width: 55%;
  padding: 0 10%;
}

h2 {
  margin-bottom: 1rem;
  text-transform: uppercase;
  opacity: 0;
}

p {
  font-weight: 400;
  margin-bottom: .8rem;
}

.p-container {
  opacity: 0;
}

@media screen and (max-width: 1279px) {
  .text-container {
    width: 60%;
  }
}
@media screen and (max-width: 768px) {
  .scene {
    background-position: bottom center;
    align-items: start;
    padding-top: 7rem;
  }

  .text-container {
    width: 100%;
    padding: 0 10%;
  }
  
  .scene1 {
    background-image: url(../assets/about/renduipad1.jpg);
  }
  
  .scene2 {
    background-image: url(../assets/about/renduipad2.jpg);
  }

  .scene3 {
    background-image: url(../assets/about/renduipad3.jpg);
  }
}

@media screen and (max-width: 480px) {
  p {
    font-size: .75rem;
    margin-bottom: .5rem;
  }

  .scene {
    padding-top: 4rem;
}
}
</style>