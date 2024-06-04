import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import route from './route'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    route
  }
})

export default store
