import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import route from './route'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    route
  }
})

export default store
