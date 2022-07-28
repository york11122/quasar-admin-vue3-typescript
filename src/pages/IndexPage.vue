<template>
  <base-content>
    <div class="base-markdown-content">
      <v-md-editor style="width:100%" :model-value="content" mode="preview" />
    </div>
  </base-content>
</template>

<script lang="ts">
export default {
  name: "IndexPage",
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

<style>
.base-markdown-content {
  padding: 0px 10px 0px 10px;
  max-width: 100%;
  margin: 0 auto;
  color: #2c3e50;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI Emoji, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
}
</style>
