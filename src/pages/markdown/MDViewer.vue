<template>
    <base-content>
        <div class="base-markdown-content">
            <v-md-editor style="width:100%" :model-value="content" mode="preview" />
        </div>
    </base-content>
</template>

<script lang="ts">
export default {
    name: "MDViewer",
}
</script>

<script lang="ts" setup>
import { ref, onMounted } from "vue"
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import { api } from "src/boot/axios"

const content = ref<string>("")
const isLoading = ref<boolean>(false)

onMounted(() => {
    getData()
})

const getData = async () => {
    try {
        isLoading.value = true;
        const res = await api.get("data/data.md")
        content.value = res.data
        isLoading.value = false;
    }
    catch (error) {
        console.log(error)
    }
}
</script>

<style scoped lang="scss">
.base-markdown-content {
    padding: 0px 10px 0px 10px;
    max-width: 900px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;

}
</style>



