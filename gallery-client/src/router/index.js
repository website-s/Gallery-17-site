import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import AboutView from '../views/About.vue'
import ContactView from '../views/Contact.vue'
import CreationView from '../views/Creation.vue'
import CreatorsView from '../views/Creators.vue'
import OneCreatorView from '../views/OneCreator.vue'
import WinterView from '../views/Winter.vue'
import WinterVisitView from '../views/WinterVisit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/creation',
    name: 'Creation',
    component: CreationView
  },
  {
    path: '/creators',
    name: 'Creators',
    component: CreatorsView
  },
  {
    path: '/one-creators',
    name: 'OneCreators',
    component: OneCreatorView
  },
  {
    path: '/winter',
    name: 'Winter',
    component: WinterView
  },
  {
    path: '/winter-visit',
    name: 'WinterVisit',
    component: WinterVisitView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router