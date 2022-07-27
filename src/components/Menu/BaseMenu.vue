<template>
  <q-scroll-area :visible="false" class="fit">
    <q-list>
      <base-menu-item :my-router="router" />
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouterStore } from "../../stores/permission";
import BaseMenuItem from "./BaseMenuItem.vue";

export default defineComponent({
  name: "BaseMenu",
  components: { BaseMenuItem },
  setup() {
    const store = useRouterStore();
    return {
      router: store.getPermissionRoutes[0].children,
    };
  },
});
</script>