<template>
  <base-content class="q-pa-sm">
    <markdown-editor-toast v-model="content" ref="markdownRef" preview-only />
  </base-content>
</template>


<script lang="ts" setup>
import MarkdownEditorToast from 'src/components/Markdown/MarkdownEditorToast.vue';
import BaseContent from "src/components/BaseContent/BaseContent.vue";
import { useFetch } from "src/composables/fetch"
import { ref } from "vue"

defineOptions({ name: "MDEditor" })

const markdownRef = ref<typeof MarkdownEditorToast | null>()
const content = ref<string>("")

const { data, onFetchResponse } = useFetch("data/md-editor-v3.md").text()

onFetchResponse((res) => {
  content.value = data.value as string
})

</script>
