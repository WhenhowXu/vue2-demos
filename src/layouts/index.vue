<template>
  <a-layout style="height: 100%">
    <a-layout-header theme="light" :style="{ background: '#fff', padding: 0 }">
      <top-header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light">
        <sidebar-menu :menuTreeData="menuTreeData" />
      </a-layout-sider>
      <a-layout-content>
        <keep-alive :include="cacheViews">
          <router-view :key="$route.fullPath" />
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapGetters } from "vuex";
import { SIDE_MENUS } from "@/router/routes";
import TopHeader from "./TopHeader.vue";
import SidebarMenu from "./SidebarMenu.vue";
export default {
  components: { TopHeader, SidebarMenu },
  data() {
    return {
      menuTreeData: SIDE_MENUS,
    };
  },
  computed: {
    ...mapGetters("route", ["cacheViews"]),
  },
};
</script>
