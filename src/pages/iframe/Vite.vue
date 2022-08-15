<template>
  <div class="q-pa-md fit">
    <Iframe :src="src" />
  </div>
</template>

<script setup lang="ts">
import Iframe from 'src/components/Iframe/Iframe.vue';
const src = 'https://vitejs.dev/';
</script>

<style scoped>
</style>
