<template>
    <base-content>
        <div class="base-markdown-content">
            <base-skelton :show="isLoading" />
            <v-md-editor style="width:100%" :model-value="state.data" mode="preview" />
        </div>
    </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import BaseSkelton from "src/components/Skelton/BaseSkelton.vue"
import { api } from "src/boot/axios"
import { useAsyncState } from '@vueuse/core'
import { AxiosResponse } from "axios";

defineOptions({ name: "MDViewer" })

const { isLoading, state } = useAsyncState(api.get("data/data.md"), {} as AxiosResponse)

</script>

<style scoped lang="scss">
.base-markdown-content {
    padding: 0px 10px 0px 10px;
    max-width: 900px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;

}
</style>



