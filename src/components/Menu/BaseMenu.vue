<template>
  <q-scroll-area :visible="false" class="fit">
    <q-list>
      <base-menu-item :my-router="router" />
    </q-list>
  </q-scroll-area>
</template>

<script lang="ts">
export default {
  name: "BaseMenu"
}
</script>

<script lang="ts" setup>
import { useRouterStore } from "../../stores/permission";
import BaseMenuItem from "./BaseMenuItem.vue";

const store = useRouterStore();
const router = store.getPermissionRoutes[0].children

</script>