import Layout from '@/layouts'
const lazyLoad = (template) => {
  return (resolve) => require([`@/views/${template}.vue`], resolve)
}

export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login') }
]

const menusTree = [
  {
    path: '/dashboard',
    template: 'dashboard/index',
    title: '首页',
    icon: 'board',
    hideInSide: false,
    hideInTabs: false
  },
  {
    path: '/demos',
    template: 'dashboard/index',
    title: '示例',
    icon: 'user',
    hideInSide: false,
    hideInTabs: false
  }
]
const generateAsyncRoutes = (menusTree) => {
  if (Array.isArray(menusTree) && menusTree.length > 0) {
    return menusTree.map(m => {
      return {
        path: m.path,
        component: lazyLoad(m.template),
        meta: { title: m.title, icon: m.icon },
        children: m.children ? generateAsyncRoutes(m.children) : []
      }
    })
  }
}
console.log(generateAsyncRoutes(menusTree))
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    children: generateAsyncRoutes(menusTree)
  }
]
