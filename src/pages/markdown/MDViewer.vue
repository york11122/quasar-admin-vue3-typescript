<template>
  <base-content scrollable contentActiveStyle="">
    <markdown-viewer-toast class="base-markdown-content" v-model="content" ref="markdownRef" />
  </base-content>
</template>


<script lang="ts" setup>
import MarkdownViewerToast from 'src/components/Markdown/MarkdownViewerToast.vue';
import BaseContent from "src/components/BaseContent/BaseContent.vue";
import { useFetch } from "src/composables/fetch"
import { ref } from "vue"

defineOptions({ name: "MDViewer" })

const markdownRef = ref<typeof MarkdownViewerToast | null>()
const content = ref<string>("")

const { data, onFetchResponse } = useFetch("data/md-editor-v3.md").text()

onFetchResponse((res) => {
  content.value = data.value as string
})

</script>
