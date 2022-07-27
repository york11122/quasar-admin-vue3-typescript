<template>
  <base-content>
    <div v-for="n in 100" :key="n" class="q-py-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </base-content>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, onMounted } from "vue";
import BaseContent from "src/components/BaseContent/BaseContent.vue";

export default defineComponent({
  name: "page1",
  components: {
    BaseContent,
  },
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
