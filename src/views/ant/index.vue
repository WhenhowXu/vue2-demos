<template>
  <DemoSidebarContainer root-path="ant" :demos="demos" />
</template>

<script>
export default {
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
      }
    ]
    return {
      demos
    }
  }
}
</script>
