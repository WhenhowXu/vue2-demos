<template>
  <div class="header-wrapper">
    <div class="header-top flex-horizontal">
      <span />
      <a-space>
        <a-avatar :size="24" icon="user" />
        <a-dropdown>
          <a-icon type="caret-down" style="color: #fff" />
          <a-menu slot="overlay" @click="onMenuClick">
            <a-menu-item key="logout"> <a-icon type="poweroff" /> 退出</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-space>
    </div>
    <div class="header-bottom flex-horizontal">
      <h3 class="header-wrapper-left">VUE DEMOS</h3>
      <menu-tabs />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import MenuTabs from './MenuTabs.vue'

export default {
  name: 'TopHeader',
  components: {
    MenuTabs
  },
  methods: {
    ...mapActions('login', ['logout']),
    onMenuClick(e) {
      switch (e.key) {
        case 'logout':
          this.logout().then(() => {
            location.reload()
          })
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>
.header-wrapper{
  height: 100%;
  background: linear-gradient(45deg, #26c389, #73c0a4,);
  .header-top{
    height: 36px;
    padding: 0 16px;
    align-items: center;
  }
  .header-bottom {
    height: 28px;
    justify-content: flex-start;
    overflow: hidden;
  }
  .header-wrapper-left {
    width: 200px;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
}
</style>
