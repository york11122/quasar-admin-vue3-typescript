<template>
    <q-btn dense flat :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" @click="$q.dark.toggle()">
        <q-tooltip>{{ $q.dark.isActive ? '淺色模式' : '深色模式' }}</q-tooltip>
    </q-btn>
</template>
  
  <script lang="ts" setup>
  defineOptions({ name: "DarkMode" })
  </script>
  