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
import { useMyApi } from "src/composables/myApi"
import { useFetch } from "src/composables/fetch"

defineOptions({ name: "MDViewer" })

const api = useMyApi()
const test = api("/status/500")

const { data, isFetching } = useFetch("data/v-md-editor.md")

</script>

<style scoped lang="scss">
.base-markdown-content {
    padding: 0px 10px 0px 10px;
    max-width: 900px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
}
</style>



