import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/page/index/index'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('../page/index/index')), 'index')
export default new Router({
  routes: [
	{
        path: '/',
        redirect: '/index'
    },
    {
      path: '/index',
      component: index
    }
  ]
})
