<template>
  <q-btn color="primary" :style="{ background: activeBgColor }" flat no-caps no-wrap @click="$router.push('/')">
    <q-icon name="fa-solid fa-shield-dog" />
    <q-toolbar-title v-if="!mini" shrink class="text-weight-bold">
      {{ title }}
    </q-toolbar-title>
  </q-btn>
</template>

<script lang="ts" setup>
import { useThemeStore } from "src/stores/theme"
import { storeToRefs } from "pinia"
defineOptions({ name: "ToolbarTitle" })
withDefaults(defineProps<{ title?: string, mini?: boolean }>(), { title: '', mini: false })

const themeStore = useThemeStore()
const { activeBgColor } = storeToRefs(themeStore)


</script>
