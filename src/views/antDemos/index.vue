<template>
  <DemoSidebarContainer v-model="demoComponent" :demos="demos">
    <component :is="demoComponent" />
  </DemoSidebarContainer>
</template>

<script>
import DemoSidebarContainer from '@/components/DemoSidebarContainer'
const demos = [
  {
    name: 'FormModel表单',
    key: 'FormModel',
    isGroup: true
  },
  { name: 'label指定宽度', key: 'FormModalLabel' },
  {
    name: 'Cascader',
    key: 'Cascader',
    isGroup: true
  },
  { name: '级联组件自定义渲染', key: 'CascaderDisplayRender' },
  {
    name: 'Select',
    key: 'Select',
    isGroup: true
  },
  { name: '选择下拉自动滚动问题', key: 'SelectScrollProBlem' }

]
export default {
  components: {
    DemoSidebarContainer,
    FormModalLabel: () => import('./FormModalLabel'),
    CascaderDisplayRender: () => import('./CascaderDisplayRender'),
    SelectScrollProBlem: () => import('./SelectScrollProBlem')
  },
  data() {
    return {
      demos,
      demoComponent: ''
    }
  }
}
</script>
