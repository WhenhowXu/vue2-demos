const MockJS = require('mockjs');
const vxeDemos = [
  { id: 1, name: '配置化表格', describe: '使用Vxe Table中的Gird组件实现配置化表格', template: 'ConfiguredTable' },
  { id: 2, name: '虚拟化树', describe: '', template: 'VirtualTree' },
  { id: 3, name: '虚拟化下拉', describe: '', template: '' },
]
// 配置化表格
const configuredData = MockJS.mock({
  "array|13100": [
    {
      "id|+1": 1,
      "sex|+1": ['1', '0'],
      "name": '@cname',
      "email": '@email',
      "nickname": '@name',
      "role|+1": ['管理员','系统管理员','普通用户'],
      "amount|1-100": 100,  
    }
  ]
})
module.exports = [
  {
    url: '/vxeTable/demos',
    type: 'post',
    response: config => {
      return {
        code: 0,
        data: vxeDemos
      }
    }
  },
  {
    url: '/vxeTable/configuredTable',
    type: 'post',
    response: config => {
      return {
        code: 0,
        data: {
          page: {
            pageSize: 500,
            total: configuredData.array.length,
            currentPage: 1,
          },
          result: configuredData.array
        }
      }
    }
  }
]
