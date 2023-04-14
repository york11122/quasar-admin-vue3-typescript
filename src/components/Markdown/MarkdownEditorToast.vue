<template>
  <div :class="className" ref="editorElement" />
</template>

<script lang="ts" setup>
import { Dark } from "quasar";
import { useVModel } from "@vueuse/core";

//import prism
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript.js';

//import editor
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import Editor from '@toast-ui/editor';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';


import { onMounted, onUnmounted, ref, watch, computed } from "vue"

defineOptions({ name: "MarkdownEditorToast" });

interface Props {
  modelValue: string | null;
  previewOnly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  previewOnly: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", content: string): void;
  (e: "onSave"): void;
}>();

const _modelValue = useVModel(props, "modelValue", emit);
const editorElement = ref<HTMLElement | null>(null)
const initialized = ref<boolean>(false)
const className = computed(() => { return `editor-panel-editor ${Dark.isActive ? " toastui-editor-dark" : ""} ` })

let editor: Editor;

const init = () => {
  editor = new Editor({
    el: editorElement.value as HTMLElement,
    initialEditType: 'wysiwyg',
    previewStyle: 'vertical',
    height: '100%',
    events: {
      change: () => { _modelValue.value = editor.getMarkdown() },
    },
    plugins: [[codeSyntaxHighlight, { highlighter: Prism }]]
  });
}

onMounted(() => { init() })

const stopWatch = watch(() => _modelValue.value, (newVal) => {
  if (!initialized.value && newVal !== editor.getMarkdown()) {
    editor.setMarkdown(newVal as string)
    editor.moveCursorToStart()
    initialized.value = true;
  }
})

onUnmounted(() => {
  editor.destroy();
  stopWatch();
})

</script>


