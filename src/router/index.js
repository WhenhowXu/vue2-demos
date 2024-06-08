import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { constantRoutes, asyncRoutes } from './routes'
import { ACCESS_TOKEN } from '@/constants/storage'

Vue.use(VueRouter)
const routes = [
  { path: '/home', component: () => import('@/views/home') },
  {
    path: '/demos', component: () => import('@/views/demos'), children: [
      { path: '/demos/search-table', component: () => import('@/views/demos/searchTable'), meta: { title: '基础可搜索表格' }}
    ]
  }
]
export const demos = routes.find(v => v.path === '/demos').children

const router = new VueRouter({
  routes: [...constantRoutes, ...asyncRoutes]
})

router.beforeEach(async(to, from, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN)
  if (token) {
    if (!store.route?.menusData) {
      const routes = await store.dispatch('route/getMenus')
      console.log(routes, '------------')
    }
    if (to.path === '/login' || to.path === '/') {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next('/login')
    } else {
      next()
    }
  }
})

router.afterEach((to, from) => {
  console.log(to, from)
  store.commit('route/setAfterEach', to)
})
export default router
