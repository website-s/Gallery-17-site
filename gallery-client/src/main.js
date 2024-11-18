import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

console.log(ScrollSmoother);

const app = createApp(App);

const initScrollSmoother = () => {
  try {
    // Détruire une instance existante, si elle existe
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.kill();
    }

    // Créer une nouvelle instance
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper', // ID du conteneur principal
      content: '#smooth-content', // ID du contenu défilable
      smooth: 1.5, // Niveau de lissage
      effects: true, // Activer les effets de ScrollTrigger
    });

    console.log('ScrollSmoother initialized successfully');
  } catch (error) {
    console.error('Error initializing ScrollSmoother:', error);
  }
};

// Initialisation après le chargement de la page
window.addEventListener('load', initScrollSmoother);

// Réinitialisation après chaque navigation
router.afterEach(() => {
  setTimeout(initScrollSmoother, 100); // Attendre que le DOM soit mis à jour
});

app.use(router).mount('#app');
