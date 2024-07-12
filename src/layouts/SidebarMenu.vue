<template>
  <div style="width: 100%">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      theme="light"
      :selected-keys="selectedKeys"
      :inline-collapsed="collapsed"
      @click="onMenuSelect"
    >
      <template v-for="item in menuTreeData">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.icon" :type="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="`${item.path}-SUB`" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import { Menu } from 'ant-design-vue'
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <a-icon v-if="item.icon" :type="item.icon" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
}
export default {
  name: 'SidebarMenu',
  components: {
    'sub-menu': SubMenu
  },
  props: {
    menuTreeData: { type: Array, default: () => [] }
  },
  data() {
    return {
      collapsed: false
    }
  },
  computed: {
    selectedKeys() {
      return [this.$route.path]
    }
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    onMenuSelect({ key }) {
      this.$router.push({ path: key })
    }
  }
}
</script>
