<template>
    <q-page style="margin: 10px; height: calc(100vh - 105px)">
        <v-md-editor v-model="content" height="100%"></v-md-editor>
    </q-page>
</template>


<script lang="ts">
export default {
    name: "MDEditor",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { VueMarkdownEditor } from "src/boot/markdown";
import zhTW from "@kangc/v-md-editor/lib/lang/zh-TW";

VueMarkdownEditor.lang.use("zh-CN", zhTW);
const content = ref<string>("");
</script>
