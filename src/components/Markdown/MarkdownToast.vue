<template>
    <div :class="className" ref="editorElement" />
</template>
  
<script lang="ts" setup>
import { Dark } from "quasar";
import { useVModel } from "@vueuse/core";
import { Editor } from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import { onMounted, onUnmounted, ref } from "vue"
import { computed } from "@vue/reactivity";

defineOptions({ name: "MarkdownToast" });


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

const editorElement = ref<HTMLElement | null>(null)
const editor = ref<Editor | null>(null)
const initEditor = () => {
    editor.value = new Editor({
        el: editorElement.value as HTMLElement,
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '100%',
        initialValue: "123",
    });


    editor.value.getMarkdown();
}

const className = computed(() => { return `editor-panel-editor ${Dark.isActive ? " toastui-editor-dark" : ""} ` })

onMounted(() => { initEditor() })

onUnmounted(() => {
    editor.value?.destroy();
})

const onSave = async () => {
    emit("onSave");
};


</script>
<style lang="scss" scoped>
.md-editor-dark {
    --md-bk-color: $dark !important;
}
</style>
  