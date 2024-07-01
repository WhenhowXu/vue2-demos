import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { constantRoutes, asyncRoutes } from './routes'
import { ACCESS_TOKEN } from '@/constants/storage'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [...constantRoutes, ...asyncRoutes]
})

router.beforeEach(async(to, from, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN)
  if (token) {
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
  store.commit('route/setAfterEach', to)
})
export default router
