<template>
  <FullCalendar :options="calendarOptions" />
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        locale: 'zh-cn',
        plugins: [
          dayGridPlugin, timeGridPlugin, interactionPlugin
        ],
        initialView: 'dayGridMonth',
        additionalMonths: 2,
        startDate: new Date(2024, 11, 23),
        endDate: new Date(2025, 0, 22),
        validRange: this.getValidRange(),
        editable: true,
        selectable: true,
        weekNumbers: false,
        selectMirror: true,
        dayMaxEvents: false,
        eventTimeFormat: {
          hour: 'numeric', minute: '2-digit', hour12: false
        },
        dragRevertDuration: 0,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
          {
            title: '跨月事件',
            start: '2023-04-28', // 月份的第一天
            end: '2023-05-02', // 月份的最后一天
            allDay: false
          }
        ]
      },
      currentEvents: []
    }
  },
  methods: {
    getValidRange() {
      return {
        start: new Date(2024, 11, 23),
        end: new Date(2025, 0, 22)
      }
    }
  }
}
</script>

<style lang="less" >
.fc-cell-shaded {
  display: none !important;
}
</style>
