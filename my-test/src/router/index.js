import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home'
import print from '@/components/printReceipts/print'
import reprint from '@/components/printReceipts/reprint'
import saveSnapshot from '@/components/printReceipts/saveSnapshot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/print',
      name: 'print',
      component: print
    },
    {
      path: '/reprint',
      name: 'reprint',
      component: reprint
    },
    {
      path: '/saveSnapshot',
      name: 'saveSnapshot',
      component: saveSnapshot
    }
  ]
})
