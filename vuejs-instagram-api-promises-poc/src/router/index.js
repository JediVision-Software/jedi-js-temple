import Vue from 'vue'
import Router from 'vue-router'
// components
import Home from '@/components/Home'
import Unexpected from '@/components/Unexpected'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/*',
      name: 'unexpected',
      component: Unexpected
    }
  ]
})
