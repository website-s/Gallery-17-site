<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div ref="scene1" class="scene scene1">
        <div data-speed="1.3" class="text-container">
          <h2 ref="scene1H2" class="text-xl md:text-2xl mb-9">Contact Infos</h2>
          <div ref="scene1P" class="p-container">
            <a class="contact-link" href="mailto:info@gallery17.ch"><svg width="50" height="38" viewBox="0 0 50 38" xmlns="http://www.w3.org/2000/svg"><path d="M45.3125 0.5C47.8516 0.5 50 2.64844 50 5.1875V33.3125C50 35.9492 47.8516 38 45.3125 38H4.6875C2.05078 38 0 35.9492 0 33.3125V5.1875C0 2.64844 2.05078 0.5 4.6875 0.5H45.3125ZM45.3125 5.1875H4.6875V9.19141C6.83594 11.0469 10.3516 13.7812 17.7734 19.6406C19.4336 20.9102 22.6562 24.0352 25 23.9375C27.2461 24.0352 30.4688 20.9102 32.1289 19.6406C39.5508 13.7812 43.0664 11.0469 45.3125 9.19141V5.1875ZM4.6875 33.3125H45.3125V15.2461C43.0664 17.0039 39.8438 19.543 35.0586 23.3516C32.8125 25.0117 29.1016 28.7227 25 28.625C20.8008 28.7227 16.9922 25.0117 14.8438 23.3516C10.0586 19.543 6.83594 17.0039 4.6875 15.2461V33.3125Z"/></svg>
            info@gallery17.ch
            </a>
            <a class="contact-link" href="https://www.instagram.com/gallery17.ch/"><svg width="45" height="45" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><path d="M22.875 11.0195C29.0273 11.0195 34.1055 16.0977 34.1055 22.25C34.1055 28.5 29.0273 33.4805 22.875 33.4805C16.625 33.4805 11.6445 28.5 11.6445 22.25C11.6445 16.0977 16.625 11.0195 22.875 11.0195ZM22.875 29.5742C26.8789 29.5742 30.1016 26.3516 30.1016 22.25C30.1016 18.2461 26.8789 15.0234 22.875 15.0234C18.7734 15.0234 15.5508 18.2461 15.5508 22.25C15.5508 26.3516 18.8711 29.5742 22.875 29.5742ZM37.1328 10.6289C37.1328 12.0938 35.9609 13.2656 34.4961 13.2656C33.0312 13.2656 31.8594 12.0938 31.8594 10.6289C31.8594 9.16406 33.0312 7.99219 34.4961 7.99219C35.9609 7.99219 37.1328 9.16406 37.1328 10.6289ZM44.5547 13.2656C44.75 16.8789 44.75 27.7188 44.5547 31.332C44.3594 34.8477 43.5781 37.875 41.0391 40.5117C38.5 43.0508 35.375 43.832 31.8594 44.0273C28.2461 44.2227 17.4062 44.2227 13.793 44.0273C10.2773 43.832 7.25 43.0508 4.61328 40.5117C2.07422 37.875 1.29297 34.8477 1.09766 31.332C0.902344 27.7188 0.902344 16.8789 1.09766 13.2656C1.29297 9.75 2.07422 6.625 4.61328 4.08594C7.25 1.54688 10.2773 0.765625 13.793 0.570312C17.4062 0.375 28.2461 0.375 31.8594 0.570312C35.375 0.765625 38.5 1.54688 41.0391 4.08594C43.5781 6.625 44.3594 9.75 44.5547 13.2656ZM39.8672 35.1406C41.0391 32.3086 40.7461 25.4727 40.7461 22.25C40.7461 19.125 41.0391 12.2891 39.8672 9.35938C39.0859 7.50391 37.6211 5.94141 35.7656 5.25781C32.8359 4.08594 26 4.37891 22.875 4.37891C19.6523 4.37891 12.8164 4.08594 9.98438 5.25781C8.03125 6.03906 6.56641 7.50391 5.78516 9.35938C4.61328 12.2891 4.90625 19.125 4.90625 22.25C4.90625 25.4727 4.61328 32.3086 5.78516 35.1406C6.56641 37.0938 8.03125 38.5586 9.98438 39.3398C12.8164 40.5117 19.6523 40.2188 22.875 40.2188C26 40.2188 32.8359 40.5117 35.7656 39.3398C37.6211 38.5586 39.1836 37.0938 39.8672 35.1406Z"/></svg>
            info@gallery17.ch
            </a>
          </div>
        </div> 
      </div>
      <div ref="scene2" class="scene scene2">
        <div data-speed="1.3" class="text-container">
          <h2 ref="scene2H2" class="text-xl md:text-2xl mb-9">Need informations ?</h2>
          <form ref="scene2P" class="p-container">
            <div class="horizontal-aligner">
                <input placeholder="name" class="contact-input" name="prenom" type="text">
                <input placeholder="last name" class="contact-input" name="nom" type="text">
            </div>
              <input placeholder="e-mail" class="contact-input" name="mail" type="text">
              <textarea placeholder="note" class="contact-input" name="note" type="text"></textarea>
              <div class="right-aligner">
                <button class="dark-a uppercase text-lg">About us</button>
              </div>
          </form>
        </div>
      </div>
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

let ctx;
let observer1, observer2;

onMounted(() => {
  // Initialiser le contexte GSAP
  ctx = gsap.context((self) => {
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
    const scene2Anim = gsap.timeline({ paused: true });
      scene2Anim.fromTo(
        self.selector(scene2H2.value),
        { x: 50, opacity: 0 },
        { x: 0, duration: 2, opacity: 1, ease: 'power4.out' }
      )
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
      { threshold: 0.5 }
    );
    observer1.observe(scene1.value);
    observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jouer l'animation lorsque `scene1` entre dans le viewport
          if (scene2Anim.reversed()) {
            scene2Anim.play();
          } else {
            scene2Anim.restart();
          }
        } else {
          // Revenir en arrière lorsque `scene1` quitte le viewport
          scene1Anim.reverse();
        }
      },
      { threshold: 0.5 }
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
  name: 'ContactView' 
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
  background-image: url(../assets/about/rendupc3.jpg);
}

.scene2 {
  background-image: url(../assets/about/rendu-contact-pc2.jpg);
  justify-content: flex-end;
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

.contact-link {
  background: none;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 570;
  margin-bottom: 1.3rem;
}

.contact-link:hover {
  background: none;
  color: #ffffff65;
}

.contact-link svg{
  fill: #fff;
  margin-right: 2rem;
  transform: scale(.8);
}

.contact-link:hover svg{
  fill: #ffffff65;
}

form {
  display: flex;
  flex-direction: column;
}

.input-container {
  position: relative;
}

.horizontal-aligner {
  display: flex;
  width: 100%;
}

.contact-input {
  background: none;
  border-bottom: 2px solid #fff;
  margin-right: 1rem;
  margin-bottom: 2.5rem;
  width: 100%;
}

.contact-input:active {
  border-color: #ffffff65;
}

.contact-input::placeholder {
  color: #fff;
  text-transform: capitalize;
}

input:focus {
  outline: none;
}

button {
    font-weight: 400;
    text-decoration: none;
    background-color: #fff;
    color: #000;
    transition: all 0.3s ease;
    width: fit-content;
    font-size: 20px;
    padding: .75rem 3.5rem;
}

button > * {
    transition: all 0.3s ease;
}

button:hover, 
button:hover > * {
    color: #ffffffda;
}

button:hover {
    background-color: #00000065;
    color: #ffffffda;
}

.right-aligner {
  display: flex;
  justify-content: flex-end;
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
    background-image: url(../assets/about/renduipad3.jpg);
  }
  
  .scene2 {
    background-image: url(../assets/about/rendu-contact-ipad2.jpg);
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