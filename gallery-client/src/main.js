import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const app = createApp(App)

app.use(router).mount('#app')

// Fonction pour créer ScrollSmoother
const initScrollSmoother = () => {
  if (ScrollSmoother.get()) {
    ScrollSmoother.get().kill(); // Tue l'instance existante pour éviter les conflits
  }
  
  // Réinitialise ScrollSmoother
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    effects: true, // Active les effets de parallaxe avec data-speed
  });
};

// Initialisation de ScrollSmoother après le chargement de la page
window.addEventListener('load', () => {
  initScrollSmoother();
});

// Réinitialisation après chaque changement de route
router.afterEach(() => {
  setTimeout(() => {
    initScrollSmoother(); // Réinitialise SmoothSmoother après la navigation
  }, 100); // Légère temporisation pour s'assurer que le DOM est prêt
});
