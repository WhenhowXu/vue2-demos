import { getAsycRouters } from '@/api/router'
import { asyncRoutes } from '@/router/routes'

export default {
  namespaced: true,
  state: {
    userInfo: null, // 登录用户信息
    token: '',
    asyncRoutes: []
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setToken(state, token) {
      state.token = token
    },
    setAsyncRoutes(state, asyncRoutes) {
      state.asyncRoutes = asyncRoutes
    }
  },
  actions: {
    async getAsycRouters() {
      const data = await getAsycRouters(asyncRoutes)
      console.log(data, '-----data')
    }
  }
}
