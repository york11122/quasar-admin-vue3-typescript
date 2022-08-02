<template>
  <q-scroll-area :thumb-style="thumbStyle" style="height: calc(100% - 50px); margin-top: 50px;">
    <q-list>
      <base-menu-item :my-router="router" />
    </q-list>
  </q-scroll-area>
  <div class="absolute-top q-pa-sm" style="height: 50px">
    <toolbar-title :title="'123'" style="width:100%" />
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseMenu"
}
</script>

<script lang="ts" setup>
import { useRouterStore } from "src/stores/permission";
import BaseMenuItem from "./BaseMenuItem.vue";
import ToolbarTitle from "src/components/Toolbar/ToolbarTitle.vue"

const thumbStyle = {
  right: "5px",
  borderRadius: "5px",
  backgroundColor: "#616161",
  width: "5px",
};

const store = useRouterStore();
const router = store.getPermissionRoutes[0].children

</script>