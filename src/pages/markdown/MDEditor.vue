<template>
    <q-page style="margin: 10px; height: calc(100vh - 105px)">
        <v-md-editor v-model="data" height="100%" placeholder="內容輸入" />
    </q-page>
</template>


<script lang="ts" setup>
import { VueMarkdownEditor } from "src/boot/markdown";
import zhTW from "@kangc/v-md-editor/lib/lang/zh-TW";
import { useApi } from "src/composables/fetchApi"
VueMarkdownEditor.lang.use("zh-CN", zhTW);

defineOptions({ name: "MDEditor" })

const { data } = useApi("data/v-md-editor.md")

</script>
