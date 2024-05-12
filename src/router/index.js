import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/home', component: () => import('@/views/home') },
  { path: '/demos', component: () => import('@/views/demos'), children: [
    { path: '/demos/search-table', component: () => import('@/views/demos/searchTable'), meta: { title: '基础可搜索表格' }}
  ] }
]
export const demos = routes.find(v => v.path === '/demos').children

const router = new VueRouter({
  routes
})
export default router
