<template>
    <div class="fix q-pa-md">
        <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" />
        <q-calendar-month ref="calendar" v-model="selectedDate" animated bordered focusable hoverable no-active-date
            :day-min-height="100" :day-height="0">
            <template #day="{ scope: { timestamp } }">
                <template v-for="event in eventsMap[timestamp.date]" :key="event.id">
                    <div :class="badgeClasses(event)" class="my-event">
                        <div class="title q-calendar__ellipsis">
                            {{ event.title + (event.time ? ' - ' + event.time : '') }}
                            <q-tooltip>{{ event.details }}</q-tooltip>
                        </div>
                    </div>
                </template>
            </template>
        </q-calendar-month>
    </div>
</template>

<script  setup>
import {
    QCalendarMonth,
    parseDate,
    today
} from '@quasar/quasar-ui-qcalendar/src/index.js'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'
import NavigationBar from './NavigationBar.vue'
import { ref, computed } from "vue"
import dayjs from "dayjs"

defineOptions({ name: "Calendar" })


const calendar = ref(null)
const selectedDate = ref(today())
const getCurrentDay = (day) => {
    const newDay = dayjs().toDate()
    newDay.setDate(day)
    const tm = parseDate(newDay)
    return tm.date
}

const events = ref([{
    id: 1,
    title: '1st of the Month',
    details: 'Everything is funny as long as it is happening to someone else',
    date: getCurrentDay(1),
    bgcolor: 'orange'
},
{
    id: 2,
    title: 'Sisters Birthday',
    details: 'Buy a nice present',
    date: getCurrentDay(4),
    bgcolor: 'green',
    icon: 'fas fa-birthday-cake'
}])

const eventsMap = computed(() => {
    const map = {}
    if (events.value.length > 0) {
        events.value.forEach(event => {
            (map[event.date] = (map[event.date] || [])).push(event)
        })
    }
    return map
})

const badgeClasses = (event) => {
    return {
        [`text-white bg-${event.bgcolor}`]: true,
        'rounded-border': true
    }
}

const onToday = () => {
    calendar.value.moveToToday()
}

const onPrev = () => {
    calendar.value.prev()
}

const onNext = () => {
    calendar.value.next()
}

</script>
