<template>
  <DemoSidebarContainer v-model="activeDemo" :demos="demos">
    <component :is="activeDemo" />
  </DemoSidebarContainer>
</template>
<script>
import DemoSidebarContainer from '@/components/DemoSidebarContainer'
import * as BasicDemos from './demos'
import { demos } from './config'

export default {
  name: 'BasicList',
  components: { DemoSidebarContainer, ...BasicDemos },
  data() {
    return {
      demos,
      activeDemo: ''
    }
  }
}
</script>
<style lang="less" scoped>
.basic-list-page {
  display: flex;
  flex-direction: row;
  height: 100%;
  .left-section {
    width: 360px;
    background-color: lightblue;
    margin-right: 12px;
  }
  .content-section {
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
