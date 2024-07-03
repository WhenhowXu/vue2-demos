import 'vxe-table/lib/style.css'
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import './plugins'
import '@/style/index.less'

require('@/mock')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
