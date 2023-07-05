import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/projects/:id',
    name: 'projectDetail',
    component: () => import('../components/Projects.vue'),
    props: true
  }
]



const router = createRouter({
  routes,
  history: createWebHistory()
  
})

export default router