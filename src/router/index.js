import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalcBPMView from '../views/CalcBPMView.vue' 
import MoodsView from '../views/MoodsView.vue' 
import AboutView from '../views/AboutView.vue'
import SkipBPMView from '../views/SkipBPMView.vue' 


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
  },
  {
    path: '/skip-bpm',
    name: 'skip-bpm',
    component: SkipBPMView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
