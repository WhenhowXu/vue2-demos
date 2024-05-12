<template>
  <div class="demos-container">
    <header class="demos-header">
      <span class="demos-title">{{ title }}</span>
      <vxe-button type="primary" @click="toBack">返回</vxe-button>
    </header>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'DemosPage',
  computed: {
    title() {
      return this.$route.meta?.title
    }
  },
  methods: {
    toBack() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.demos-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .demos-title{
    font-weight: bold;
  }
}
</style>
