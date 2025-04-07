<template>
  <FullCalendar :options="calendarOptions" />
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import multiMonthPlugin from '@fullcalendar/multimonth'

export default {
  name: 'MultiMonthYear',
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        locale: 'zh-cn',
        plugins: [multiMonthPlugin],
        initialView: 'multiMonthYear',
        multiMonthMaxColumns: 1
      }
    }
  }
}
</script>
