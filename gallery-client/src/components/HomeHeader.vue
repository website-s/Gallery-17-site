<template>
  <div class="header-container">
  <header class="home-header">
    <div 
      class="slider-component"
      v-for="(item, index) in HeaderContent" 
      :key="index" 
      :style="{ backgroundImage: 'url(' + require(`@/assets/${item.background}`) + ')' }"
      ref="sliderComponent">
      <video 
        v-if="item.video"
        class="header-video"
        :src="require(`@/assets/${item.video}`)"
        autoplay 
        muted 
        loop 
        playsinline
        :style="{ pointerEvents: 'none' }"
      ></video>
      <div class="button-aligner">
        <RouterLink class="headerLink" :to="item['boutton']">
          <img v-if="item.buttonImg" :src="require(`@/assets/${item.buttonImg}`)" :alt="item['buttonImgAlt']" />
          <div class="text-xs" v-if="item.buttonTxt">{{ item['buttonTxt'] }}</div>
        </RouterLink>
      </div>
    </div>
  </header>
  <button @click="prevSlide" class="nav-left"><svg width="26" height="45" viewBox="0 0 26 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 43L3 22.5L24 2" stroke="white" stroke-width="3"/>
  </svg>
  </button>
    <button @click="nextSlide" class="nav-right"><svg width="26" height="45" viewBox="0 0 26 45" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 2L23 22.5L2 43" stroke="white" stroke-width="3"/>
  </svg>
  </button>
</div>
<div class="espace"></div>
</template>

<script>
import gsap from "gsap";
import HomeHeaderContent from '../assets/jsonAssets/contents/HomeHeaderContent.json';


export default {
  data() {
    return {
      HeaderContent: HomeHeaderContent, // Charger le JSON directement
      currentIndex: 0, // Suivi de l'index actuel du slider
      autoPlayTimer: null, // Pour gérer l'animation automatique
      isAutoPlaying: true // Contrôle de l'état d'auto-play
    };
  },
  mounted() {
    this.startAutoPlay(); // Lancer l'auto-play quand le composant est monté
  },
  beforeUnmount() {
    clearInterval(this.autoPlayTimer); // Nettoyer le timer à la destruction
  },
  methods: {
    nextSlide() {
      this.isAutoPlaying = false; // Stopper l'auto-play si la flèche est utilisée
      clearInterval(this.autoPlayTimer); // Stop le timer

      // Passer au slide suivant
      if (this.currentIndex < this.HeaderContent.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Revenir au premier slide
      }
      this.animateSlider();
    },
    prevSlide() {
      this.isAutoPlaying = false; // Stopper l'auto-play si la flèche est utilisée
      clearInterval(this.autoPlayTimer); // Stop le timer

      // Passer au slide précédent
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.HeaderContent.length - 1; // Aller au dernier slide
      }
      this.animateSlider();
    },
    animateSlider() {
      gsap.to(this.$refs.sliderComponent, {
        duration: 1, // Durée de l'animation
        x: -this.currentIndex * 100 + "vw", // Déplacer de 100vw par slide
        ease: "power2.inOut"
      });
    },
    startAutoPlay() {
      this.autoPlayTimer = setInterval(() => {
        if (this.isAutoPlaying) {
          // Passer au slide suivant automatiquement
          if (this.currentIndex < this.HeaderContent.length - 1) {
            this.currentIndex++;
          } else {
            this.currentIndex = 0; // Revenir au premier slide quand on est à la fin
          }
          this.animateSlider();
        }
      }, 7000); // Changement automatique toutes les 7 secondes
    }
  }
};
</script>


<style scoped>
  .header-container {
    height: 90vh;
    position: relative;
  }
.home-header {
  display: flex;
  width: 300vw; /* La largeur de tous les sliders combinés */
  overflow: hidden;
  position: relative;
}


.nav-left,
.nav-right {
  position: absolute;
  top: 45%;
  cursor: pointer;
  z-index: 2;
  background-color: #0000009c;
  border-radius: 100%;
  aspect-ratio: 1/1;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}

.slider-component {
  position: relative;
  height: 90vh;
  width: 100vw; /* Chaque slide prend la largeur complète de l'écran */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.nav-left:hover,
.nav-right:hover {
  background-color: #00000065;
}

.text-xs {
  font-weight: 570;
}

.nav-left svg,
.nav-right svg{
  height: 1rem;
  transition: all 0.3s ease;
}

.nav-left {
  left: 1rem;
}

.nav-right {
  right: 1rem;
}

.nav-left svg{
  margin-right: .2rem;
}

.nav-right svg{
  margin-left: .2rem;
}
.nav-left:hover svg{
  transform: translateX(-2px);
}

.nav-right:hover svg{
  transform: translateX(2px);
}

.headerLink {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .75rem 3rem;
  min-width: 7rem;
  text-transform: uppercase;
  }
  .discover-invit {
    height: 10rem;
    position: relative;
  }
  .logo-decoration {
    height: 80%;
    position: absolute;
    bottom: 0;
    left: -250vw;
  }
  .button-aligner {
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 3rem;
    justify-content: center;
  }
  .header-video {
    min-height: 100%;
    min-width: 100%;
  }
  .headerLink img {
    max-height: 2.25rem;
    max-width: 100%;
  }
  .espace {
    height: 10rem;
  }
</style>
