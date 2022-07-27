<template>
  <q-btn flat no-caps no-wrap v-if="$q.screen.gt.xs">
    <q-toolbar-title shrink class="text-weight-bold">
      {{ title }}
    </q-toolbar-title>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ToolBarTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>
