<template>
  <base-content scrollable>
    <div class="q-pa-md fit">
      <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" />
      <QCalendarMonth class="calendar" style="font-size: 1.2rem; font-weight:bold" v-model="selectedDate"
        ref="calendarRef" focusable bordered :focusType="['day']" hoverable no-active-date :day-min-height="70"
        :mini-mode="$q.screen.lt.md" animated @click-day="onClickDay" :dark="$q.dark.isActive" />
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import { QCalendarMonth, today } from "@quasar/quasar-ui-qcalendar"
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass'

import BaseContent from 'src/components/BaseContent/BaseContent.vue'
import NavigationBar from './components/NavigationBar.vue'
import Notify from "src/components/Notify/Notify";


defineOptions({ name: "Calendar" })

const calendarRef = ref<typeof QCalendarMonth | null>(null)
const selectedDate = ref<string>(today())

const onClickDay = (data: any) => {
  Notify.create({
    message: `${data.scope.timestamp.date} clicked`,
    timeout: 1000
  })
}

const onToday = () => { calendarRef.value?.moveToToday() }
const onPrev = () => { calendarRef.value?.prev() }
const onNext = () => { calendarRef.value?.next() }

</script>

<style lang="scss" scoped>
.calendar {
  --calendar-scrollbar-track: #7986cb;
  --calendar-scrollbar-thumb: #1a237e;
  --calendar-scrollbar-thumb-hover: #3949ab;
  --calendar-scrollbar-track-dark: #7986cb;
  --calendar-scrollbar-thumb-dark: #1a237e;
  --calendar-scrollbar-thumb-hover-dark: #3949ab;
  --calendar-border: #7986cb 1px solid;
  --calendar-border-dark: #e8eaf6 1px solid;
  --calendar-border-section: #9fa8da 1px dashed;
  --calendar-border-section-dark: #9fa8da 1px dashed;
  --calendar-border-current: #7986cb 2px solid;
  --calendar-border-current-dark: #3d5afe 2px solid;
  --calendar-mini-range-connector-hover-border: #027BE3 1px dashed;
  --calendar-mini-range-connector-hover-border-dark: #ffff66 1px dashed;
  --calendar-color: #1a237e;
  --calendar-color-dark: #e8eaf6;
  --calendar-background: #e8eaf6;
  --calendar-background-dark: #1a237e;
  --calendar-current-color: #027BE3;
  --calendar-current-color-dark: #3d5afe;
  --calendar-current-background: #00000000;
  --calendar-current-background-dark: #1a237e;
  --calendar-disabled-date-color: #e8eaf6;
  --calendar-disabled-date-color-dark: #bebebe;
  --calendar-disabled-date-background: #9fa8da;
  --calendar-disabled-date-background-dark: #121212;
  --calendar-active-date-color: #e8eaf6;
  --calendar-active-date-color-dark: #ffff66;
  --calendar-active-date-background: #3d5afe;
  --calendar-active-date-background-dark: #7986cb;
  --calendar-outside-color: #1a237e;
  --calendar-outside-color-dark: #bebebe;
  --calendar-outside-background: #00000000;
  --calendar-outside-background-dark: #121212;
  --calendar-selected-color: #027BE3;
  --calendar-selected-color-dark: #027BE3;
  --calendar-selected-background: #cce7ff;
  --calendar-selected-background-dark: #cce7ff;
  --calendar-mini-selected-color: unset;
  --calendar-mini-selected-color-dark: #027BE3;
  --calendar-mini-selected-background: unset;
  --calendar-mini-selected-background-dark: #cce7ff;
  --calendar-mini-selected-label-color: #027BE3;
  --calendar-mini-selected-label-color-dark: #cce7ff;
  --calendar-mini-selected-label-background: #cce7ff;
  --calendar-mini-selected-label-background-dark: #027BE3;
  --calendar-range-color: #027BE3;
  --calendar-range-color-dark: #027BE3;
  --calendar-range-background: #cce7ff;
  --calendar-range-background-dark: #cce7ff;
  --calendar-mini-range-color: #cce7ff;
  --calendar-mini-range-color-dark: #027BE3;
  --calendar-mini-range-background: unset;
  --calendar-mini-range-background-dark: unset;
  --calendar-mini-range-label-color: #cce7ff;
  --calendar-mini-range-label-color-dark: #027BE3;
  --calendar-mini-range-label-background: #cce7ff;
}
</style>
