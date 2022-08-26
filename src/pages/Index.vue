<template>
  <base-content>
    <div ref="pieRef" style="height: 500px;" />
    <div class="base-markdown-content">
      <base-skelton :show="isFetching" />
      <v-md-editor style="width:100%" :model-value="data" mode="preview" />
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import BaseSkelton from "src/components/Skelton/BaseSkelton.vue"
import { useFetch } from "src/composables/fetch"
import { type ECOption, useEcharts } from "src/composables/eCharts"

defineOptions({ name: "Index" })

const { data, isFetching } = useFetch("data/index.md")

const pieOptions = ref<ECOption>({
  legend: {},
  toolbox: {
    show: false,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 150],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
});
const { domRef: pieRef } = useEcharts(pieOptions);

</script>
