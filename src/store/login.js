import { login } from '@/api/login'
import { ACCESS_TOKEN, USER_INFO } from '@/constants/storage'

export default {
  namespaced: true,
  state: {
    userInfo: null, // 登录用户信息
    token: ''
  },
  getters: {},
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      state.token = userInfo?.token
      localStorage.setItem(ACCESS_TOKEN, userInfo?.token)
      localStorage.setItem(USER_INFO, userInfo)
    }
  },
  actions: {
    // 登录
    async login({ commit }, payload) {
      const data = await login(payload)
      commit('setUserInfo', data)
      return data
    },
    // 退出登录
    async logout({ commit }) {
      commit('setUserInfo', null)
      localStorage.removeItem(ACCESS_TOKEN)
      localStorage.removeItem(USER_INFO)
    }
  }
}
