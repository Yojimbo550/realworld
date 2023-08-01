import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '/src/components/pages/LoginPage.vue'
import Home from '@/components/pages/Home.vue'
import RegistrationPage from '@/components/pages/RegistrationPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/registrationPage',
      component: RegistrationPage
    },
   {
      path:'/loginPage',
      component: LoginPage
   }
  ]
})

export default router
