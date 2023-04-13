<template>
  <base-content scrollable>
    <div class="base-markdown-content">
      <base-skelton :show="isFetching" />
      <markdown v-model="data" :previewOnly="true" />
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue";
import BaseSkelton from "src/components/Skelton/BaseSkelton.vue";
import Markdown from "src/components/Markdown/Markdown.vue";
import { useFetch } from "src/composables/fetch";

defineOptions({ name: "MDViewer" });

const { data, isFetching } = useFetch("data/md-editor-v3.md").text();
</script>
