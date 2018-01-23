import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Parkings from '@/components/Parkings'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/parkings',
      name: 'Parkings',
      component: Parkings
    }
  ]
})
