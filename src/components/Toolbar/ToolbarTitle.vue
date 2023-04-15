<template>
  <q-btn flat no-caps no-wrap @click="$router.push('/')">
    <q-icon name="fa-solid fa-shield-dog" />
    <q-toolbar-title v-if="!mini" shrink class="text-weight-bold">
      {{ title }}
    </q-toolbar-title>
  </q-btn>
</template>

<script lang="ts" setup>
defineOptions({ name: "ToolbarTitle" })
withDefaults(defineProps<{ title?: string, mini?: boolean }>(), { title: '', mini: false })
</script>
