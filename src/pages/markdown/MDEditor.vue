<template>
    <base-content>
        <markdown-toast />
    </base-content>
</template>


<script lang="ts" setup>
import MarkdownToast from "src/components/Markdown/MarkdownToast.vue";
import BaseContent from "src/components/BaseContent/BaseContent.vue";
import { useFetch } from "src/composables/fetch"
import Notify from "src/components/Notify/Notify"

defineOptions({ name: "MDEditor" })

const { data } = useFetch("data/md-editor-v3.md").text()

const saveArticle = () => {
    Notify.create({
        message: "Saved!",
        color: "positive",
    })
}

</script>
