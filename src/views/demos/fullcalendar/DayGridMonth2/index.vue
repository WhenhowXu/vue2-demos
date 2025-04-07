<template>
  <FullCalendar :options="calendarOptions">
    <template v-slot:eventContent="arg">
      <b>{{ arg.timeText }}</b>
      <i>{{ arg.event.title }}</i>
    </template>
  </FullCalendar>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        locale: 'zh-cn',
        dayCellContent: this.renderDayCellContent,
        handleCustomRendering: ({ el }) => {
          el.style.backgroundColor = 'yellow'
        },
        views: {
          dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 2 }
          }
        },
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        visibleRange() {
          return {
            start: new Date(2024, 12, 10),
            end: new Date(2025, 1, 19)
          }
        },
        validRange() {
          return {
            start: new Date(2024, 12, 10),
            end: new Date(2025, 1, 19)
          }
        },
        // validRange: this.getValidRange(),
        // views: {
        //   dayGrid: {
        //     weeks: 10
        //   }
        // },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: []
    }
  },
  methods: {
    renderDayCellContent(args) {
      const dateCell = document.createElement('div')
      dateCell.innerHTML = args.date.getDate()
      // 你可以在这里添加更多的自定义样式或逻辑
      // 例如，根据日期的特定条件改变背景色或添加其他装饰
      // if (args.date.isToday) {      // }
      dateCell.style.backgroundColor = 'red'
      return {
        domNodes: [dateCell]
      }
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    getValidRange() {
      return {
        start: new Date(2024, 11, 23),
        end: new Date(2025, 0, 22)
      }
    },
    handleDateSelect(selectInfo) {
      const title = prompt('Please enter a new title for your event')
      const calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },

    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },

    handleEvents(events) {
      this.currentEvents = events
    }
  }
}
</script>
