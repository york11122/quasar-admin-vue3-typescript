<template>
  <div :class="className" ref="viewerElement" />
</template>

<script lang="ts" setup>
import { Dark } from "quasar";
import { Editor, Viewer } from '@toast-ui/editor';
import { onMounted, onUnmounted, ref, computed, watch } from "vue"

//import prism
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.js';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

defineOptions({ name: "MarkdownViewerToast" });

interface Props {
  modelValue: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const className = computed(() => { return `editor-panel-editor ${Dark.isActive ? " toastui-editor-dark" : ""} ` })
const viewerElement = ref<HTMLElement | null>(null)
const initialized = ref<boolean>(false)

let viewer: Viewer;

const init = () => {
  viewer = Editor.factory({
    el: viewerElement.value as HTMLElement,
    viewer: true,
    height: '100%',
    plugins: [[codeSyntaxHighlight, { highlighter: Prism }]]
  });
}

const stopWatch = watch(() => props.modelValue, (newVal) => {
  if (!initialized.value) {
    viewer.setMarkdown(newVal as string)
    initialized.value = true;
  }
})

onMounted(() => { init() })

onUnmounted(() => {
  viewer.destroy();
  stopWatch();
})

</script>
<style lang="scss" scoped>
pre {
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
}
</style>
