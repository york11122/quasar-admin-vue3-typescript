<template>
  <base-content padding>
    <div class="text-h6">
      Only an admin can view this page.<br /> If the current user does not have admin permissions, <br />this page will be
      hidden
      from the menu and will not be registered with the router.
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import BaseContent from "src/components/BaseContent/BaseContent.vue"

defineOptions({ name: "Permission" })


</script>
