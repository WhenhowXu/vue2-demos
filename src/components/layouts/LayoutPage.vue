<template>
  <div class="layout-page-container" :style="`padding: ${_padding}`">
    <header class="layout-page-header" :style="headerStyle">
      <slot name="header" />
    </header>
    <div class="layout-page-main" :style="`padding: ${_mainPadding}`">
      <slot name="main" />
    </div>
    <footer class="layout-page-footer" :style="footerStyle">
      <slot name="footer" />
    </footer>
    <slot />
  </div>
</template>
<script>
const getPadding = (padding) =>
  typeof padding === "number" ? `${padding}px` : padding;
export default {
  name: "LayoutPage",
  props: {
    padding: { type: Number | String, default: 12 },
    mainPadding: { type: Number | String, default: 12 },
    gutter: { type: Number | Array, default: 12 }, // header、main、footer之间的间隙距离
  },
  computed: {
    _padding() {
      return getPadding(this.padding);
    },
    _mainPadding() {
      return getPadding(this.mainPadding);
    },
    hasHeader() {
      return !!this.$slots.header;
    },
    headerStyle() {
      // header和main之间间隙距离
      const headerGutter = Array.isArray(this.gutter)
          ? this.gutter[0]
          : this.gutter,
        hasHeader = this.$slots.header;
      return {
        marginBottom: `${hasHeader ? headerGutter : 0}px`,
      };
    },
    footerStyle() {
      // footer和main之间间隙距离
      const footerGutter = Array.isArray(this.gutter)
          ? this.gutter[1]
          : this.gutter,
        hasFooter = this.$slots.footer;
      return { marginTop: `${hasFooter ? footerGutter : 0}px` };
    },
  },
};
</script>

<style scoped lang="less">
.layout-page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .layout-page-main {
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
}
</style>
