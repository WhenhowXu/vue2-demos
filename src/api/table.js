import axios from '@/utils/request'

// 获取vxe-table相关示例
export const getVxeDemos = (data) => axios.post('/vxeTable/demos', data)
// 配置化表格获取数据
export const getConfiguredData = data => axios.post('/vxeTable/configuredTable', data)
