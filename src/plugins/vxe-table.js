import Vue from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
VXETable.setConfig({
  size: 'small', // 全局尺寸
  table: {
    stripe: true, // 开启斑马纹
    scrollX: {
      enabled: true, // 是否默认开启横向虚拟滚动
      gt: 60  // 当列大于指定数量时自动触发启用虚拟滚动
    },
    scrollY: {
      enabled: true, // 是否默认开启纵向虚拟滚动
      gt: 200  // 当数据大于指定数量时自动触发启用虚拟滚动
    }
  }
})
Vue.use(VXETable)
