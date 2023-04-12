<template>
  <MdEditor style="height: 100%" v-model="_modelValue" :theme="Dark.isActive ? 'dark' : 'light'" language="zh-TW"
    previewTheme="default" :previewOnly="previewOnly" :toolbars="markdownToolbarOptions" @onSave="onSave">
  </MdEditor>
</template>

<script lang="ts" setup>
import { Dark } from "quasar";
import { useVModel } from "@vueuse/core";

import MdEditor, { ToolbarNames } from "md-editor-v3";
import "md-editor-v3/lib/style.css";


defineOptions({ name: "Markdown" });

const markdownToolbarOptions: ToolbarNames[] = [
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'strikeThrough',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'mermaid',
  'katex',
  '-',
  'revoke',
  'next',
  '=',
  'pageFullscreen',
  'preview',
  'catalog',
];

interface Props {
  modelValue: string | null;
  previewOnly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  previewOnly: false,
});

const emit = defineEmits<{
  (e: "update:modelValue"): void;
  (e: "onSave"): void;
}>();

const _modelValue = useVModel(props, "modelValue", emit);

const onSave = async () => {
  emit("onSave");
};

MdEditor.config({
  editorConfig: {
    languageUserDefined: {
    },
  },
});
</script>
<style lang="scss" scoped>
.md-editor-dark {
  --md-bk-color: $dark !important;
}
</style>
