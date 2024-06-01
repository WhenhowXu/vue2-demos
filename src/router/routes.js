import Layout from '@/layouts'

export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login') }
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/dashboard', component: () => import('@/views/dashboard'), meta: { title: '首页' }}
    ]
  }
]
