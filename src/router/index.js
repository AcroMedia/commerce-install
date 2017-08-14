import Vue from 'vue'
import Router from 'vue-router'
import Kickstart from '@/components/Kickstart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Kickstart',
      component: Kickstart,
    },
  ],
})
