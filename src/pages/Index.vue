<template>
  <base-content>
    <div class="base-markdown-content">
      <base-skelton :show="isFetching" />
      <count-to suffix="$" :start-value="0" :end-value="7754" />
      <v-md-editor style="width:100%" :model-value="data" mode="preview" />
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import BaseSkelton from "src/components/Skelton/BaseSkelton.vue"
import { useFetch } from "src/composables/fetch"
import CountTo from "src/components/CountTo/CountTo.vue";

defineOptions({ name: "Index" })

const { data, isFetching } = useFetch("data/index.md")


</script>
