import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

createApp(App).use(router).mount('#app')