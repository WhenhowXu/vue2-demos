import 'vxe-table/lib/style.css'
import Vue from 'vue'
import App from './App'
import VXETable from 'vxe-table'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(VXETable)
new Vue({
  el: '#app',
  store,
  render: (h) => h(App)
})
