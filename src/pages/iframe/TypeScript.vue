<template>
  <div class="fit">
    <Iframe :src="src" />
  </div>
</template>

<script setup lang="ts">
import Iframe from 'src/components/Iframe/Iframe.vue';
const src = 'https://www.typescriptlang.org/';
</script>

<style scoped>
</style>
