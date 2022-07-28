<template>
  <div class="" style="margin: 10px; height: calc(100vh - 105px)">
    <v-md-editor v-model="content" height="100%"></v-md-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { VueMarkdownEditor } from "src/boot/markdown";
import zhTW from "@kangc/v-md-editor/lib/lang/zh-TW";
export default defineComponent({
  name: "markdown",
  components: {},
  setup() {
    VueMarkdownEditor.lang.use("zh-TW", zhTW);
    const content = ref<string>("");
    return { content };
  },
});
</script>
