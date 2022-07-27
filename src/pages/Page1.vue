<template>
  <q-page padding> page1 </q-page>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, onMounted } from "vue";
export default defineComponent({
  name: "page1",
  setup() {
    onMounted(() => {
      console.log("page mounted");
    });
    onUnmounted(() => {
      console.log("page unmounted");
    });
  },
});
</script>
