import 'vxe-table/lib/style.css'
import '@/components/base/styles/index.scss'
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import './plugins'
import '@/style/index.less'

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
