<template>
  <q-btn flat no-caps no-wrap v-if="$q.screen.gt.xs">
    <q-toolbar-title shrink class="text-weight-bold">
      {{ title }}
    </q-toolbar-title>
  </q-btn>
</template>

<script lang="ts" setup>
defineOptions({ name: "ToolbarTitle" })
withDefaults(defineProps<{ title?: string }>(), { title: '' })
</script>
