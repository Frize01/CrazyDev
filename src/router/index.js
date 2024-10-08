import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import GameView from '@/views/GameView.vue'
import InstructionsView from '@/views/InstructionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/instructions',
      name: 'instructions',
      component: InstructionsView
    }
  ]
})

export default router
