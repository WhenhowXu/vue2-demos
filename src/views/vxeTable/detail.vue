<template>
  <LayoutPage>
    <template #header>
      <vxe-toolbar style="padding: 12px">
        <template #buttons>
          <h3>{{ title }}</h3>
        </template>
        <template #tools>
          <vxe-button
            icon="vxe-icon-undo"
            class="tool-btn"
            @click="goBack"
          >返回</vxe-button>
        </template>
      </vxe-toolbar>
    </template>
    <template #main>
      <component :is="demoComponent" />
    </template>
  </LayoutPage>
</template>
<script>
import { LayoutPage } from '@/components/layouts'
import Demos from './demos'
export default {
  name: 'VXETableDetail',
  components: { LayoutPage, ...Demos },
  data() {
    return {
      demoComponent: ''
    }
  },
  computed: {
    title() {
      return `VXE-Table 示例：${this.$route.query.title || ''}`
    }
  },
  mounted() {
    this.setDemoComponent()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },

    setDemoComponent() {
      this.demoComponent = this.$route.query.template
    }
  }
}
</script>
