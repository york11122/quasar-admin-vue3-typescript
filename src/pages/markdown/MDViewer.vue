<template>
    <base-content>
        <div class="base-markdown-content">
            <base-skelton :show="isFetching" />
            <v-md-editor style="width:100%" :model-value="data" mode="preview" />
        </div>
    </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import BaseSkelton from "src/components/Skelton/BaseSkelton.vue"
import { useFetch } from "src/composables/fetch"

defineOptions({ name: "MDViewer" })

const { data, isFetching } = useFetch("data/v-md-editor.md")

</script>



