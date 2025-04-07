import Vue from 'vue'

import './ant-design-vue'
import './vxe-table'
import './particlas'
import './base-components'
import directives from './directives'
import DemoSidebarContainer from '@/components/DemoSidebarContainer'
Vue.component(DemoSidebarContainer.name, DemoSidebarContainer)
Vue.use(directives)
