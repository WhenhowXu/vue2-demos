<template>
  <DemoSidebarContainer :demos="demos" />
</template>
<script>
export default {
  name: 'BasicList',
  data() {
    const demos = [
      {
        name: 'model数据双向绑定',
        key: 'model',
        children: [{ name: '数据双向绑定组件传递', key: 'MultipleModel' }]
      },
      {
        name: 'ref',
        key: 'ref',
        children: [{ name: 'ref名称相同', key: 'SameRef' }]
      },
      {
        name: 'createElement(h函数)',
        key: 'createElement',
        children: [{ name: '使用h传递插槽', key: 'CreateElementSlots' }]
      },
      {
        name: '自定义指令',
        key: 'directive',
        children: [
          { name: '关键字高亮', key: 'DirectiveHighLight' },
          { name: '权限按钮', key: 'DirectivePermission' }
        ]
      }
    ]

    return {
      demos
    }
  }
}
</script>
