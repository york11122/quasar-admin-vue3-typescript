<template>
    <base-content>
        <div class="base-markdown-content">
            <md-editor style="width:100%" v-model="content" />
        </div>
    </base-content>
</template>



<script lang="ts" setup>
import { ref, onMounted } from "vue"
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import { api } from "src/boot/axios"

import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';


defineOptions({ name: "MDViewer" })

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

