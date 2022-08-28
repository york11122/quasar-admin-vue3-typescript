<template>
    <base-content>
        <q-card flat class="q-gutter-md">
            <q-card-section>
                <div ref="barRef" style="height:400px" />
            </q-card-section>
            <q-card-section>
                <div ref="stackRef" style="height:400px" />
            </q-card-section>
            <q-card-section>
                <div ref="pieRef" style="height:400px" />
            </q-card-section>
        </q-card>

    </base-content>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import { graphic } from 'echarts';
import { type ECOption, useEcharts } from 'src/composables/echarts';
import BaseContent from 'src/components/BaseContent/BaseContent.vue';

//stack chart demo
const stackRef = ref<HTMLElement | null>(null)
const stackOption = ref<ECOption>({
    title: {
        text: 'Stacked Area Chart'
    },
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
    toolbox: {
        feature: {
            saveAsImage: {}
        }
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


//dynamic barchart demo
const data: number[] = [];
for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
}
const barRef = ref<HTMLElement | null>(null)
const barOption = ref<ECOption>({
    xAxis: {
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
    },
    series: [
        {
            realtimeSort: true,
            name: 'X',
            type: 'bar',
            data: data,
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            }
        }
    ],
    legend: {
        show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
});
const barChart = useEcharts(barRef, barOption);
const handleDynamicData = () => {
    if (barChart.value) {
        for (var i = 0; i < data.length; ++i) {
            if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
            } else {
                data[i] += Math.round(Math.random() * 200);
            }
        }
        barChart.value?.setOption({
            series: [
                {
                    type: 'bar',
                    data
                }
            ]
        });
    }
}
const barInterval = setInterval(handleDynamicData, 1000)

// piechart demo
const pieRef = ref<HTMLElement | null>(null)
const pieOption = ref<ECOption>({
    title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
})
useEcharts(pieRef, pieOption);


onUnmounted(() => {
    clearInterval(barInterval)
})


</script>

<style scoped>
</style>
