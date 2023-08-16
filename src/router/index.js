import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '/src/components/pages/LoginPage.vue'
import Home from '@/components/pages/Home.vue'
import RegistrationPage from '@/components/pages/RegistrationPage.vue'
import NewArticle from '@/components/pages/NewArticle.vue'
import UserSettings from '@/components/pages/UserSettings.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      props: true
    },
    {
      path: '/registrationPage',
      component: RegistrationPage
    },
   {
      path:'/loginPage',
      component: LoginPage
   },
   {
    path:'/newArticle',
      component: NewArticle
   },
   {
    path:'/settings',
      component: UserSettings
   },
  ]
})

export default router
