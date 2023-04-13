<template>
  <base-content>
    <Iframe ref="iframe" class="fit" style="border:none;" :src="src"></iframe>
  </base-content>
</template>

<script setup lang="ts">
import BaseContent from "src/components/BaseContent/BaseContent.vue";
import Iframe from 'src/components/Iframe/Iframe.vue';
const src = 'https://vuejs.org/';
</script>

<style scoped></style>
