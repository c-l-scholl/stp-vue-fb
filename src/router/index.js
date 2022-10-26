import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalcBPMView from '../views/CalcBPMView.vue' 
import MoodsView from '../views/MoodsView.vue' 
import AboutView from '../views/AboutView.vue'
import SkipBPMView from '../views/SkipBPMView.vue' 
import BPMHelpView from '../views/BPMHelpView.vue' 


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
    path: '/mood',
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
  },
  {
    path: '/bpm-help',
    name: 'bpm-help',
    component: BPMHelpView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
