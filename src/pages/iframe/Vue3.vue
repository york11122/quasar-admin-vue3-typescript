<template>
  <div class="q-pa-md fit">
    {{ loading }}
    <iframe ref="iframe" class="fit" style="border:none;" :src="src"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const src = 'https://vuejs.org/';
const loading = ref<boolean>(false)
const iframe = ref<any>(null)
onMounted(() => {
  if (iframe.attachEvent) {
    // IE
    iframe.attachEvent('onload', () => { loading.value = false; });
  } else {
    // not IE
    iframe.onload = () => { loading.value = false; };
  }
})

</script>

<style scoped>
</style>
