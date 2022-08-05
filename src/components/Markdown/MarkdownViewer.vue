<template>
    <div class="base-markdown-content">
        <md-editor style="width:100%" v-model="content" preview-only />
    </div>
</template>

<script lang="ts" setup>
import MdEditor from 'md-editor-v3';

defineOptions({ name: "MarkdownViewer" })
withDefaults(defineProps<{ content?: string }>(), { content: '' })
</script>

<style scoped src="md-editor-v3/lib/style.css">
.base-markdown-content {
    padding: 0px 10px 0px 10px;
    max-width: 900px;
    margin: 0 auto;
    color: #2c3e50;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI Emoji, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    word-wrap: break-word;
    -webkit-font-smoothing: antialiased;
}
</style>

