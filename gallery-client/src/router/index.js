import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: { showNavigation: true }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: { showNavigation: true }
  },
  {
    path: '/creation',
    name: 'Creation',
    component: () => import('../views/Creation.vue'),
    meta: { showNavigation: false }
  },
  {
    path: '/creators',
    name: 'Creators',
    component: () => import('../views/Creators.vue'),
    meta: { showNavigation: true }
  },
  {
    path: '/one-creator',
    name: 'OneCreators',
    component: () => import('../views/OneCreator.vue'),
    meta: { showNavigation: true }
  },
  {
    path: '/winter',
    name: 'Winter',
    component: () => import('../views/Winter.vue'),
    meta: { showNavigation: true }
  },
  {
    path: '/winter-visit',
    name: 'WinterVisit',
    component: () => import('../views/WinterVisit.vue'),
    meta: { showNavigation: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { showNavigation: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router