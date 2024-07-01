<template>
  <a-tabs :active-key="activeTabKey" type="editable-card" size="small" hide-add class="layout-top-tabs">
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

.layout-top-tabs.ant-tabs.ant-tabs-card {
  height: 28px;
  /deep/ .ant-tabs-card-bar .ant-tabs-tab {
    height: 28px;
  }
  /deep/.ant-tabs-nav-container,
  /deep/.ant-tabs-nav-wrap,
  /deep/.ant-tabs-nav-scroll,
  /deep/.ant-tabs-nav,
  /deep/.ant-tabs-tab,
  /deep/.ant-tabs-tab > div,
  /deep/.ant-tabs-tab-prev,
  /deep/.ant-tabs-tab-next {
    height: 28px;
    line-height: 28px;
  }

  /deep/.ant-tabs-tab-prev,
  /deep/.ant-tabs-tab-next {
    color: #fff;
  }

  /deep/.ant-tabs-card-bar {
    margin-bottom: 0;
  }
  /deep/.anticon-close {
    visibility: hidden;
  }
  /deep/ .ant-tabs-tab {
    &:hover {
      .anticon-close {
        visibility: visible;
      }
    }
  }
}
.layout-top-tabs{
  /deep/ .ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar{
    margin-bottom: 0;
  }
}
</style>
