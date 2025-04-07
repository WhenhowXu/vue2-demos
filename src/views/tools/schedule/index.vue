<template>
  <DemoSidebarContainer root-path="fullcalendar" :demos="demos" />
</template>

<script>
export default {
  data() {
    const demos = [
      {
        name: '@fullcalendar/daygrid',
        key: '@fullcalendar/daygrid',
        children: [
          { name: 'dayGridMonth', key: 'DayGridMonth' },
          { name: '自定义日期单元格内容', key: 'DayGridMonth2' }
        ]
      },
      {
        name: '@fullcalendar/resource-daygrid',
        key: '@fullcalendar/resource-daygrid',
        children: [{ name: 'ResourceDayGridMonth', key: 'ResourceDayGridMonth' }]
      },
      {
        name: '@fullcalendar/multimonth',
        key: '@fullcalendar/multimonth',
        children: [{ name: 'MultiMonthYear', key: 'MultiMonthYear' }]
      }
    ]
    return {
      demos
    }
  }
}
</script>
