<template>
  <DemoSidebarContainer v-model="demoComponent" :demos="demos">
    <component :is="demoComponent" />
  </DemoSidebarContainer>
</template>

<script>
import DemoSidebarContainer from '@/components/DemoSidebarContainer'
const demos = [
  {
    name: '@fullcalendar/daygrid',
    key: '@fullcalendar/daygrid',
    isGroup: true
  },
  { name: 'dayGridMonth', key: 'DayGridMonth' },
  { name: '自定义日期单元格内容', key: 'DayGridMonth2' },
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
    DemoSidebarContainer,
    ResourceDayGridMonth: () => import('./ResourceDayGridMonth'),
    DayGridMonth: () => import('./DayGridMonth'),
    DayGridMonth2: () => import('./DayGridMonth2'),
    MultiMonthYear: () => import('./MultiMonthYear')
  },
  data() {
    return {
      demos,
      demoComponent: ''
    }
  }
}
</script>
