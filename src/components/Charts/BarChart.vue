<template>
    <canvas class="fit" ref="chart"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"

import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, BarController } from 'chart.js'

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, BarController)

defineOptions({ name: "BarChart" })


const chart = ref<HTMLCanvasElement | null>(null)

const data = {
    labels: ['2022-07-08', '2022-07-07', '2022-07-06', '2022-07-05'],
    datasets: [{
        label: '今日翻堆達標率',
        backgroundColor: '#f87979',
        data: [41.17647058823529, 80, 0, 50]
    }]
}

const config: any = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        indexAxis: 'y',


    }
}

onMounted(() => {
    const myChart = new Chart(
        chart.value as HTMLCanvasElement,
        config
    );
})

</script>
