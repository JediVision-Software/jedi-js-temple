import Vue from 'vue'
import Router from 'vue-router'
// components
import Dashboard from '@/components/Dashboard'
import Home from '@/components/Home'
import Unexpected from '@/components/Unexpected'
// services
import OAuthService from '@/service/OAuthService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/*',
      name: 'unexpected',
      component: Unexpected
    },
    {
      path: '/oauthURL',
      name: 'oauthURL',
      beforeEnter: (to, from, next) => {
        window.location.href = OAuthService.getOAuthURL()
      }
    }
  ]
})
