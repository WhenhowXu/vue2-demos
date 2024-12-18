import Layout from '@/layouts'
const lazyLoad = (template) => {
  if (template === 'layout') {
    return Layout
  }
  return (resolve) => require([`@/views/${template}.vue`], resolve)
}

export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login'), meta: { hideInMenu: true }}
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
    path: '/',
    template: 'layout',
    title: '仪表板',
    children: [
      {
        path: '/dashboard',
        template: 'dashboard/index',
        title: '首页',
        icon: 'dashboard',
        name: 'dashboard',
        cache: true
      }
    ]
  },
  {
    path: '/tool',
    template: 'layout',
    title: '插件',
    children: [
      { path: '', redirect: '/tool/monaco-editor' },
      {
        path: '/tool/monaco-editor',
        template: 'tools/monaco-editor/index',
        title: '代码编辑器',
        cache: true
      },
      {
        path: '/tool/schedule',
        template: 'tools/schedule/index',
        title: '日程',
        cache: true
      }
    ]
  },
  {
    path: '/vueBasic',
    template: 'layout',
    title: 'Vue基础',
    children: [
      {
        path: '/vueBasic/list',
        template: 'basic/index',
        title: 'Vue基础',
        icon: 'user',
        name: 'VueBasicList',
        cache: true
      },
      {
        path: '/vueBasic/detail',
        template: 'basic/basicDetail',
        title: '详情',
        name: 'VueBasicDetail',
        hideInMenu: true,
        cache: true
      }
    ]
  },
  {
    path: '/vxeTable',
    template: 'layout',
    title: 'Vue基础',
    children: [
      {
        path: '/vxeTable/list',
        template: 'vxeTable/index',
        title: 'VxeTable示例',
        icon: 'table',
        name: 'VxeTableDemos',
        cache: true
      },
      {
        path: '/vxeTable/detail',
        template: 'vxeTable/detail',
        title: '详情',
        name: 'VXETableDetail',
        hideInMenu: true,
        cache: true
      }
    ]
  },
  {
    path: '/antDemos',
    template: 'layout',
    title: 'Vue基础',
    children: [
      {
        path: '/antDemos/list',
        template: 'antDemos/index',
        title: 'Ant Design Vue示例',
        icon: 'table',
        name: 'AntDemos',
        cache: true
      },
      {
        path: '/antDemos/detail',
        template: 'antDemos/detail',
        title: '详情',
        name: 'AntDemosDetail',
        hideInMenu: true,
        cache: true
      }
    ]
  }
]
/**
 * 生成动态路由
 *
 * @param menusTree 菜单树数组
 * @returns 返回路由数组
 */

export const generateAddRoutes = (menusTree, level = 1) => {
  return menusTree.map(m => (
    {
      name: m.name,
      path: m.path,
      component: m.isExternal ? null : lazyLoad(m.template),
      meta: { title: m.title, icon: m.icon },
      children: m.children?.length ? generateAddRoutes(m.children, level + 1) : null
    }
  ))
}

export const ADD_ROUTES = generateAddRoutes(menusTree)

// 生成侧标栏菜单
const generateSideMenus = (menusTree) => {
  return menusTree.filter(m => !m.hideInMenu && m.title).map(m => {
    const obj = {
      title: m.title,
      path: m.path,
      icon: m.icon,
      children: m.children ? generateSideMenus(m.children) : null
    }
    if (obj.children?.length === 1) {
      return obj.children[0]
    }
    return obj
  })
}
export const SIDE_MENUS = generateSideMenus(menusTree)
console.log('SIDE_MENUS', SIDE_MENUS)
export const asyncRoutes = ADD_ROUTES
