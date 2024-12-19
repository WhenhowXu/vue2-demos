<template>
  <div class="vd-page vd-sidebar-page">
    <div class="vd-sidebar-page_sidebar">
      <ul class="demo-list">
        <li
          v-for="demo in demos"
          :key="demo.key"
          :class="{
            'demo-list_item': true,
            selected: demoComponent === demo.key && !demo.isGroup,
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
      <component :is="demoComponent" />
    </div>
  </div>
</template>

<script>
const demos = [
  {
    name: '@fullcalendar/daygrid',
    key: '@fullcalendar/daygrid',
    isGroup: true
  },
  { name: 'dayGridMonth', key: 'DayGridMonth' },
  {
    name: '@fullcalendar/resource-daygrid',
    key: '@fullcalendar/resource-daygrid',
    isGroup: true
  },
  { name: 'ResourceDayGridMonth', key: 'ResourceDayGridMonth' },
  {
    name: '@fullcalendar/multimonth',
    key: '@fullcalendar/multimonth',
    isGroup: true
  },
  { name: 'MultiMonthYear', key: 'MultiMonthYear' }
]
export default {
  components: {
    ResourceDayGridMonth: () => import('./ResourceDayGridMonth'),
    DayGridMonth: () => import('./DayGridMonth'),
    MultiMonthYear: () => import('./MultiMonthYear')
  },
  data() {
    return {
      demos,
      demoComponent: ''
    }
  },
  created() {
    this.demoComponent = demos.find((item) => !item.isGroup)?.key
  },
  methods: {
    switchDemo(demo) {
      if (demo.key === this.demoComponent || demo.isGroup) {
        return
      }
      this.demoComponent = demo.key
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
