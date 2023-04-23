<template>
  <base-content padding>
    <div class="text-h6">
      {{ $t('permission.content') }}
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue"

defineOptions({ name: "Permission" })


</script>
