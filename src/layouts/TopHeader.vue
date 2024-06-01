<template>
  <div class="top-header flex-horizontal">
    <div class="top-header-left">VUE DEMOS</div>
    <menu-tabs />
  </div>
</template>
<script>
import MenuTabs from './MenuTabs.vue'
export default {
  name: 'TopHeader',
  components: {
    MenuTabs
  }
}
</script>
<style lang="less" scoped>
.top-header{
  height: 100%;
  justify-content: flex-start;
  background: linear-gradient(45deg, #26c389, #73c0a4,);;
  .top-header-left{
    width: 200px;
    text-align: center;
  }
}
</style>
