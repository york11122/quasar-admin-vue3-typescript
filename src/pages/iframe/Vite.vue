<template>
  <base-content>
    <Iframe :src="src" />
  </base-content>
</template>

<script setup lang="ts">
import Iframe from 'src/components/Iframe/Iframe.vue';
import BaseContent from 'src/components/BaseContent/BaseContent.vue';
const src = 'https://vitejs.dev/';
</script>

<style scoped></style>
