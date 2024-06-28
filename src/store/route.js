import { getMenus } from '@/api/router'

export default {
  namespaced: true,
  state: {
    menuTabs: [], // 顶部页面tabs
    menusData: null,
    sideMenuTree: [], // 侧边栏
    includeNames: [], // keep-alive 需缓存的页面
    excludeNames: [] // keep-alive 不缓存的页面
  },
  getters: {
    cacheViews() {
      return [...new Set(state.menuTabs.filter(m => m.cache && m.name).map(m => m.name))]
    }
  },
  mutations: {
    setAfterEach(state, to = {}) {
      if (state.menuTabs.find(m => m.fullPath === to.fullPath)) return
      state.menuTabs.push({
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
