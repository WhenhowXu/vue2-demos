<template>
  <DemoSidebarContainer root-path="@/views/antDemos" :demos="demos" />
</template>

<script>
export default {
  name: 'AntDemos',
  data() {
    const demos = [
      {
        name: 'FormModel表单',
        key: 'FormModel',
        children: [{ name: 'label指定宽度', key: 'FormModalLabel' }]
      },
      {
        name: 'Cascader',
        key: 'Cascader',
        children: [{ name: '级联组件自定义渲染', key: 'CascaderDisplayRender' }]
      },
      {
        name: 'Select',
        key: 'Select',
        children: [{ name: '选择下拉自动滚动问题', key: 'SelectScrollProBlem' }]
      }
    ]
    return {
      demos
    }
  }
}
</script>
