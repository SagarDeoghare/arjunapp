import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Tribe from '../views/Tribe.vue'
import AS from '../views/AS.vue'
import Register from '../components/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'contact',
        component: () => import('@/views/Contact.vue')
      },
      {
        path: 'about',
        component: () => import('@/views/About.vue')
      }
    ]
  },
  {
    path: '/tribe',
    component: Tribe
  },
  {
    path: '/as',
    component: AS
  },
  {
    path: '/register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
