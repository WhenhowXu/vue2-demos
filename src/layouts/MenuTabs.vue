<template>
  <a-tabs
    :active-key="activeTabKey"
    type="editable-card"
    size="small"
    hide-add
    class="layout-top-tabs"
    @edit="onEditTab"
    @change="switchCurrentPage"
  >
    <a-tab-pane v-for="m in menuTags" :key="m.fullPath">
      <a-dropdown slot="tab" :trigger="['contextmenu']">
        <span>
          {{ m.title }}
        </span>
        <template #overlay>
          <a-menu @click="onClickMenu($event, m)">
            <a-menu-item v-for="item in closeActions" :key="item.key">
              {{ item.name }}
              <a-icon :type="item.icon" />
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MenuTabs',
  data() {
    return {
      closeActions: [
        { name: '关闭左侧页面', key: 'closeLeft', icon: 'left' },
        { name: '关闭右侧页面', key: 'closeRight', icon: 'right' },
        { name: '关闭其它页面', key: 'closeOther', icon: 'close' }
      ]
    }
  },
  computed: {
    ...mapState('route', ['menuTags']),
    activeTabKey() {
      return this.$route.fullPath
    }
  },
  methods: {
    ...mapActions('route', [
      'switchCurrentPage',
      'closePage',
      'closeSomePages'
    ]),

    onEditTab(fullPath, action) {
      action === 'remove' &&
        this.closePage({ fullPath }).catch((errorMessage) => {
          this.$message.info(errorMessage)
        })
    },

    onClickMenu(e, item) {
      this.closeSomePages({ type: e.key, fullPath: item.fullPath })
    }
  }
}
</script>
<style lang="less" scoped>
.layout-top-tabs {
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
.layout-top-tabs {
  /deep/ .ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar {
    margin-bottom: 0;
  }
}
</style>
