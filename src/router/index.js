import Vue from 'vue'
import Router from 'vue-router'
import foods from '@/components/foods'
import assess from '@/components/assess'
import store from '@/components/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'foods',
      component: foods
    },
    {
      path: '/foods',
      name: 'foods',
      component: foods
    },
    {
      path: '/assess',
      name: 'assess',
      component: assess
    },
    {
      path: '/store',
      name: 'store',
      component: store
    }

  ]
})
