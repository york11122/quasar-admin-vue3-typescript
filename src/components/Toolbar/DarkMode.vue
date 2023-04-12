<template>
    <q-btn dense flat :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" @click="toggle">
        <q-tooltip>{{ $q.dark.isActive ? '淺色模式' : '深色模式' }}</q-tooltip>
    </q-btn>
</template>
  
<script lang="ts" setup>
import { LocalStorage, Dark } from "quasar"
import { onMounted } from "vue"

defineOptions({ name: "DarkMode" })

onMounted(() => {
    const dark: boolean | null = LocalStorage.getItem("dark")
    if (dark !== null) {
        Dark.set(dark)
    }
})

const toggle = () => {
    Dark.toggle()
    LocalStorage.set("dark", Dark.isActive)
}
</script>
  