<template>
  <base-content>
    Only Admin can view this page.
  </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue"

defineOptions({ name: "Permission" })


</script>
