<template>
    <q-page style="margin: 10px; height: calc(100vh - 105px)">
        <v-md-editor v-model="state.data" height="100%" placeholder="內容輸入"></v-md-editor>
    </q-page>
</template>


<script lang="ts" setup>
import { VueMarkdownEditor } from "src/boot/markdown";
import zhTW from "@kangc/v-md-editor/lib/lang/zh-TW";
import { api } from "src/boot/axios"
import { useAsyncState } from '@vueuse/core'
import { AxiosResponse } from "axios";

defineOptions({ name: "MDEditor" })

const { state } = useAsyncState(api.get("data/v-md-editor.md"), {} as AxiosResponse)

VueMarkdownEditor.lang.use("zh-CN", zhTW);
</script>
