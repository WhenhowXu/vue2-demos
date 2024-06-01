<template>
  <a-tabs :value="activeTabKey" type="editable-card" size="small" hide-add class="layout-top-tabs">
    <a-tab-pane v-for="m in menuTabs" :key="m.fullPath">
      <template slot="tab">{{ m.title }}</template>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MenuTabs',
  computed: {
    ...mapState('route', ['menuTabs']),
    activeTabKey() {
      return this.$route.fullPath
    }
  }
}
</script>
<style lang="less" scoped>
.layout-top-tabs{
  align-self: end;
}
.layout-top-tabs{
  /deep/ .ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar{
    margin-bottom: 0;
  }
}
</style>
