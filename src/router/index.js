import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Jedan from '@/components/Jedan'
import Dva from '@/components/Dva'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/jedan',
      name: 'Jedan',
      component: Jedan
    },
    {
      path: '/dva',
      name: 'Dva',
      component: Dva
    }

  ]
})
