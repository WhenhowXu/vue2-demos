<template>
  <div class="vd-page vd-sidebar-page">
    <div class="vd-sidebar-page_sidebar">
      <ul class="demo-list">
        <li
          v-for="demo in demos"
          :key="demo.key"
          :class="{
            'demo-list_item': true,
            selected: demoKey === demo.key && !demo.isGroup,
            grouped: demo.isGroup,
            selectable: !demo.isGroup
          }"
          @click="switchDemo(demo)"
        >
          {{ demo.name }}
        </li>
      </ul>
    </div>
    <div class="vd-sidebar-page_main">
      <slot />
    </div>
  </div>
</template>

<script>
import {} from '@/components/'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    demos: { type: Array, default: () => [] },
    value: { type: String, default: undefined }
  },
  data() {
    return {
      demoKey: ''
    }
  },
  watch: {
    value(val) {
      this.demoKey = val
    }
  },
  created() {
    const demo = this.demos.find((item) => !item.isGroup)
    this.switchDemo(demo)
  },
  methods: {
    switchDemo(demo) {
      if (demo.key === this.demoKey || demo.isGroup) {
        return
      }
      this.demoKey = demo.key
      this.$emit('change', demo.key, demo)
    }
  }
}
</script>

<style lang="less" scoped>
.demo-list {
  &_item {
    padding: 4px 8px;
    border-radius: 4px;
    &.selected {
      color: #fff;
      background-color: #04abb5;
    }
    &.selectable {
      cursor: pointer;
    }
    &.grouped{
      font-weight: bold;
    }
  }
}

.fc {
  max-width: 1100px;
  margin: 0 auto;
  }

.fc {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
