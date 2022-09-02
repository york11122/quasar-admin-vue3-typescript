<template>
  <base-content>
    <div class="base-markdown-content">
      {{ data }}
      {{ isFetching }}
      {{ isFinished }}
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import BaseSkelton from "src/components/Skelton/BaseSkelton.vue"
import { useMyApi } from "src/composables/myApi"
import CountTo from "src/components/CountTo/CountTo.vue";
import { onMounted } from "vue";

defineOptions({ name: "Index" })
const api = useMyApi()

const { data, isFetching, isFinished } = api("status/400")


</script>
