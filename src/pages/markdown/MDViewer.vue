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
import { useApi } from "src/composables/fetchApi"

defineOptions({ name: "MDViewer" })

const { isFetching, data } = useApi("data/v-md-editor.md")


</script>

<style scoped lang="scss">
.base-markdown-content {
    padding: 0px 10px 0px 10px;
    max-width: 900px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
}
</style>



