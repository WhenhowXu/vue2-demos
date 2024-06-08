<template>
  <a-layout style="height: 100%">
    <a-layout-header theme="light" :style="{ background:'#fff' , padding: 0}">
      <top-header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light">
        <sidebar-menu />
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import TopHeader from './TopHeader.vue'
import SidebarMenu from './SidebarMenu.vue'
export default {
  components: { TopHeader, SidebarMenu }
}
</script>
