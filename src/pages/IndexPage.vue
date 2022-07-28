<template>
  <base-content>
    <div class="base-markdown-content">
      <v-md-editor style="width:100%" :model-value="content" mode="preview" />
    </div>
  </base-content>
</template>

<script lang="ts">
export default {
  name: "IndexPage",
}
</script>

<script lang="ts" setup>
import { ref } from "vue"
import BaseContent from "src/components/BaseContent/BaseContent.vue"
const content = ref<string>(":::tip 123 \n123 123")
</script>

<style>
.base-markdown-content {
  padding: 0px 10px 0px 10px;
  max-width: 100%;
  margin: 0 auto;
  color: #2c3e50;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI Emoji, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
}
</style>
