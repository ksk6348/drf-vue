import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Spot from '@/views/Spot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/spots/@:spot_id',
      name: 'spot',
      component: Spot
    }
  ]
})
