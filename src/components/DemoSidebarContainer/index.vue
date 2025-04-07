<template>
  <div class="vd-page vd-sidebar-page">
    <div class="vd-sidebar-page_sidebar">
      <div v-for="(p, index) in demos" :key="index">
        <div>
          <h3>{{ p.name }}</h3>
          <ul class="demo-list">
            <li
              v-for="demo in p.children || []"
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
      </div>
    </div>
    <div class="vd-sidebar-page_main">
      <slot>
        <component :is="dynamicComponent" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoSidebarContainer',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    rootPath: { type: String, default: 'basic' },
    demos: { type: Array, default: () => [] },
    value: { type: String, default: undefined }
  },
  data() {
    return {
      demoKey: '',
      dynamicComponent: null
    }
  },
  watch: {
    value(val) {
      this.demoKey = val
    }
  },
  created() {
    this.switchDemo(this.demos?.[0]?.children?.[0])
  },
  methods: {
    setLoadComponent(demoKey) {
      this.dynamicComponent = resolve =>
        require.ensure([], () =>
          resolve(require(`@/views/demos/${this.rootPath}/${demoKey}/index.vue`))
        )
    },
    switchDemo(demo) {
      if (!demo || demo.key === this.demoKey) {
        return
      }
      this.demoKey = demo.key
      this.setLoadComponent(this.demoKey)
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
    &.grouped {
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
