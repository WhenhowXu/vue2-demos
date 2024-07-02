import { getMenus } from '@/api/router'

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
    }
  }
}
