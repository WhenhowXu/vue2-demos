import 'vxe-table/lib/style.css'
import Vue from 'vue'
import App from './App'
import VXETable from 'vxe-table'
import store from '@/store'
import router from './router'
import '@/style/index.less'
import './plugins'

Vue.config.productionTip = false
Vue.use(VXETable)
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
