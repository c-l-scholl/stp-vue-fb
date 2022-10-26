import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalcBPMView from '../views/CalcBPMView.vue' 
import MoodsView from '../views/MoodsView.vue' 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calc-bpm',
    name: 'calc-bpm',
    component: CalcBPMView
  },
  {
    path: '/moods',
    name: 'moods',
    component: MoodsView
  },
  {
    path: '/about-main',
    name: 'about-main',
    component: AboutView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
