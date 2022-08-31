<template>
    <base-content>
        <div class="q-pl-sm q-pr-sm">
            <div class="column q-gutter-y-sm">
                <div class="row col q-gutter-sm">
                    <div class="col-12 col-md-8">
                        <q-card flat bordered class="q-pa-md">
                            <div class="row">
                                <q-card flat class="col-4 col-md-2">
                                    <q-card-section>
                                        <div class="text-h5 text-weight-bold">
                                            <count-to :start-value="0" :end-value="7754" />
                                        </div>
                                        <div class="text-caption text-grey" style="font-size: 15px;">
                                            Current User
                                        </div>
                                    </q-card-section>
                                    <q-card-section>
                                        <div class="text-h5 text-weight-bold">
                                            <count-to :start-value="0" :end-value="24593" />
                                        </div>
                                        <div class="text-caption text-grey" style="font-size: 15px;">
                                            Monthly Register
                                        </div>
                                    </q-card-section>
                                    <q-card-section>
                                        <div class="text-h5 text-weight-bold">
                                            <count-to :start-value="0" :end-value="1546" />
                                        </div>
                                        <div class="text-caption text-grey" style="font-size: 15px;">
                                            Total Sales
                                        </div>
                                    </q-card-section>

                                </q-card>
                                <div class="col">
                                    <div ref="stackRef" style="height:400px" />
                                </div>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-12 col-md">
                        <q-card flat bordered>
                            <div ref="pieRef" style="height:430px" />
                        </q-card>
                    </div>
                </div>
                <div class="row q-gutter-x-sm">
                    <div class="col-12 col-md">
                        <q-card flat bordered>
                            <div class="q-px-lg q-pb-md">
                                <q-timeline layout="comfortable" color="secondary">

                                    <q-timeline-entry heading>
                                        November, 2017
                                    </q-timeline-entry>

                                    <q-timeline-entry title="Event Title" subtitle="February 22, 1986"
                                        avatar="https://cdn.quasar.dev/img/avatar2.jpg">
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </q-timeline-entry>

                                    <q-timeline-entry title="Event Title" subtitle="February 22, 1986">
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </q-timeline-entry>

                                    <q-timeline-entry title="Event Title" subtitle="February 22, 1986" color="orange"
                                        icon="done_all">
                                        <div>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </div>
                                    </q-timeline-entry>


                                </q-timeline>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-12 col-md">
                        <q-card flat bordered>
                            <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
                        </q-card>
                    </div>
                </div>
            </div>
        </div>
    </base-content>
</template>
  
  <script lang="ts" setup>
  import { ref } from "vue"
  import { type ECOption, useEcharts } from "src/composables/eCharts"
  import BaseContent from "src/components/BaseContent/BaseContent.vue"
  import CountTo from "src/components/CountTo/CountTo.vue";
  
  
  defineOptions({ name: "Dashboard" })
  
  const columns: any = [
      {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: "name"
      },
      { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
      { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
      { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
      { name: 'protein', label: 'Protein (g)', field: 'protein' },
      { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
      { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
  ]
  
  const rows = [
      {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
      },
      {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
      },
      {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
      },
      {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
      },
      {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
      },
      {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
      },
      {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
      },
      {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
      },
      {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
      },
      {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
      }
  ]
  
  
  const stackRef = ref<HTMLElement | null>(null)
  const stackOption = ref<ECOption>({
  
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              label: {
                  backgroundColor: '#6a7985'
              }
          }
      },
      legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
  
      grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
      },
      xAxis: [
          {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
      ],
      yAxis: [
          {
              type: 'value'
          }
      ],
      series: [
          {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                  focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                  focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                  focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                  focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              label: {
                  show: true,
                  position: 'top'
              },
              areaStyle: {},
              emphasis: {
                  focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
      ]
  });
  useEcharts(stackRef, stackOption);
  
  const pieRef = ref<HTMLElement | null>(null)
  const pieOption = ref<ECOption>({
      tooltip: {
          trigger: 'item'
      },
      legend: {
          top: '5%',
          left: 'center'
      },
      series: [
          {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '40',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
              ]
          }
      ]
  });
  useEcharts(pieRef, pieOption);
  
  </script>
  