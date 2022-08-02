<template>
  <template v-for="(item, index) in myRouter">
    <div class="base-menu-item" :key="index" v-if="item.meta?.isHidden !== true">
      <q-item-label v-if="item.meta?.itemLabel" header class="text-weight-bold text-uppercase"
        :key="item.meta.itemLabel">
        {{ item.meta.itemLabel }}
      </q-item-label>

      <!-- no children -->
      <q-item v-if="!item.children" :exact="item.path === '/'" clickable v-ripple :inset-level="initLevel"
        active-class="baseItemActive" :to="handleLink(basePath, item.path)">
        <q-item-section avatar>
          <q-icon :name="item.meta?.icon" />
        </q-item-section>
        <q-item-section>
          {{ item.meta?.title }}
        </q-item-section>
      </q-item>

      <!-- has children -->
      <q-expansion-item v-else :class="baseItemClassWithNoChildren(item.path)" :duration="duration"
        :default-opened="item.meta?.isOpen" :header-inset-level="initLevel" :icon="item.meta?.icon"
        :label="item.meta?.title">
        <!-- MenuItem initlevl + 0.2 ; concat parent path if router is existed -->
        <base-menu-item :my-router="item.children" :init-level="initLevel + 0.2"
          :base-path="basePath === '' ? item.path : basePath + '/' + item.path" :duration="duration" />
      </q-expansion-item>
    </div>
  </template>
</template>

<script lang="ts">
export default {
  name: "BaseMenuItem"
}
</script>


<script lang="ts" setup>
import { computed } from "vue";
import { RouteRecordRaw, useRoute } from "vue-router";

interface Props {
  myRouter: RouteRecordRaw[]
  initLevel?: number
  duration?: number
  basePath?: string
}

withDefaults(defineProps<Props>(), { myRouter: () => [] as RouteRecordRaw[], initLevel: 0, duration: 150, basePath: "" })
const route = useRoute();

const baseItemClassWithNoChildren = computed(() => {
  return (path: any) => {
    return route.fullPath.startsWith(path) ? "baseRootItemActive" : "";
  };
});

const handleLink = (basePath: string, itemPath: string) => {
  const link = basePath === "" ? itemPath : basePath + "/" + itemPath;
  if (link.indexOf("http") !== -1) {
    return "#";
  }
  return link;
};
</script>



<style lang="scss" scoped>
// $
.base-menu-item {
  color: $ITEM_COLOR  !important;

  .baseRootItemActive {
    color: $ACTIVE_COLOR  !important;
  }

  .baseItemActive {
    color: $ACTIVE_COLOR  !important;
    background: $ACTIVE_BACKGROUND;
    transition: all 0.618s;
    font-weight: bold;

    &:after {
      content: "";
      position: absolute;
      width: 3px;
      height: 100%;
      background: $ACTIVE_COLOR  !important;
      top: 0;
      right: 0;
    }
  }
}
</style>


