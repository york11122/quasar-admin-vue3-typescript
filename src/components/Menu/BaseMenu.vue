<template>
  <q-scroll-area :thumb-style="thumbStyle">
    <q-list>
      <base-menu-item :my-router="router" />
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts" setup>
import { useRouterStore } from "src/stores/permission";
import BaseMenuItem from "./BaseMenuItem.vue";

defineOptions({ name: "BaseMenu" })

const thumbStyle = {
  right: "1px",
  borderRadius: "5px",
  backgroundColor: "#616161",
  width: "5px",
};

const store = useRouterStore();
const router = store.getPermissionRoutes[0].children

</script>