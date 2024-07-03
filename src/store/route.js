import { getMenus } from '@/api/router'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    menuTags: [], // 顶部页面tabs
    menusData: null,
    sideMenuTree: [] // 侧边栏
  },
  getters: {
    cacheViews(state) {
      return [...new Set(state.menuTags.filter(m => m.cache && m.name).map(m => m.name))]
    }
  },
  mutations: {
    setMenuTags(state, menuTags = []) {
      state.menuTags = menuTags
    },
    setAfterEach(state, to = {}) {
      if (!to.meta.title || to.meta.hideInSide) return
      if (state.menuTags.find(m => m.fullPath === to.fullPath)) return
      state.menuTags.push({
        title: to.meta?.title,
        path: to.path,
        cache: to.meta?.cache,
        fullPath: to.fullPath,
        name: to.name,
        meta: to.meta
      })
    }
  },
  actions: {
    async getMenus({ commit }) {
      const data = await getMenus()
      console.log(data)
    },
    switchCurrentPage(_, fullPath) {
      router.push(fullPath)
    },
    closePage({ commit, state }, { fullPath, targetFullPath } = {}) {
      if (state.menuTags.length === 1) {
        return Promise.reject('这是最后一页，不能再关闭了！')
      }
      const closeIndex = state.menuTags.findIndex(v => v.fullPath === fullPath)
      let targetTag = targetFullPath ? (state.menuTags.find(v => v.fullPath === targetFullPath)) : null
      if (!targetFullPath) {
        targetTag = state.menuTags[closeIndex === state.menuTags.length - 1 ? closeIndex - 1 : closeIndex + 1]
      }
      commit('setMenuTags', state.menuTags.filter(v => v.fullPath !== fullPath))
      router.push(targetTag.fullPath)
    },
    closeSomePages({ commit, state }, { fullPath, type }) {
      if (!['closeLeft', 'closeRight', 'closeOther'].includes(type)) return
      const targetIndex = state.menuTags.findIndex(v => v.fullPath === fullPath)
      let newMenuTags = state.menuTags
      switch (type) {
        case 'closeLeft':
          newMenuTags = newMenuTags.filter((_, index) => index >= targetIndex)
          break
        case 'closeRight':
          newMenuTags = newMenuTags.filter((_, index) => index <= targetIndex)
          break
        case 'closeOther':
          newMenuTags = newMenuTags.filter((_, index) => index === targetIndex)
          break
      }
      commit('setMenuTags', newMenuTags)
      router.push(fullPath)
    }
  }
}
