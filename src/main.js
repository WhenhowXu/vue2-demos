import 'vxe-table/lib/style.css'
import Vue from 'vue'
import App from './App'
import VXETable from 'vxe-table'
import store from '@/store'
import router from './router'
import './plugins'
import '@/style/index.less'

require('@/mock')

Vue.config.productionTip = false
Vue.use(VXETable)
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
