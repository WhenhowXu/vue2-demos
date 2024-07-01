import Layout from '@/layouts'
const lazyLoad = (template) => {
  return (resolve) => require([`@/views/${template}.vue`], resolve)
}

export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login'), meta: { hideInSide: true }}
]

/**
 * 菜单配置
 * title 菜单名称
 * path 跳转路径
 * template 模版
 * icon 图标
 * hideInMenu {boolean}: 是否在菜单栏中显示
 * isExternal {boolean}: 是否为外部链接
 * name 组件名称 keep-alive 缓存标识
 * cache {boolean}: 页面是否缓存
 * children: 子菜单
 * */
const menusTree = [
  {
    path: '/dashboard',
    template: 'dashboard/index',
    title: '首页',
    icon: 'board',
    hideInSide: false,
    name: 'HomePage', // 缓存组件名称
    cache: true // 页面是否缓存
  },
  {
    path: '/demos',
    template: 'demos/index',
    title: 'VxeTable示例',
    icon: 'user'
  }
]
/**
 * 生成动态路由
 *
 * @param menusTree 菜单树数组
 * @returns 返回路由数组
 */

export const generateAddRoutes = (menusTree) => {
  return menusTree.map(m => (
    {
      name: m.name,
      path: m.path,
      component: m.isExternal ? null : lazyLoad(m.template),
      meta: { title: m.title, icon: m.icon },
      children: m.children?.length ? generateAddRoutes(m.children) : null
    }
  ))
}

export const ADD_ROUTES = generateAddRoutes(menusTree)

// 生成侧标栏菜单
const generateSideMenus = (menusTree) => {
  return menusTree.filter(m => !m.hideInSide).map(m => ({
    title: m.title,
    path: m.path,
    icon: m.icon,
    children: m.children ? generateSideMenus(m.children) : null
  }))
}
export const SIDE_MENUS = generateSideMenus(menusTree)
console.log(SIDE_MENUS, '-----------SIDE_MENUS')
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    children: ADD_ROUTES
  }
]
