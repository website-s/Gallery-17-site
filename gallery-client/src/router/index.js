import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/creation',
    name: 'Creation',
    component: () => import('../views/Creation.vue')
  },
  {
    path: '/creators',
    name: 'Creators',
    component: () => import('../views/Creators.vue')
  },
  {
    path: '/one-creators',
    name: 'OneCreators',
    component: () => import('../views/OneCreator.vue')
  },
  {
    path: '/winter',
    name: 'Winter',
    component: () => import('../views/Winter.vue')
  },
  {
    path: '/winter-visit',
    name: 'WinterVisit',
    component: () => import('../views/WinterVisit.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router