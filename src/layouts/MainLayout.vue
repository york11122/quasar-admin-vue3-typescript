<template>
  <q-layout view="lHh lpR lff" class="full-height">
    <q-header class="q-py-xs header" height-hint="48" bordered
      style="box-shadow: rgba(0, 0, 0, 0) 0px 2px 12px 0px; padding-bottom: 2px">
      <q-toolbar style="margin-top: -5px">
        <div class="q-pr-md">
          <q-btn flat dense round aria-label="Menu" :icon="leftDrawerOpen === true ? 'menu_open' : 'menu'"
            @click="toggleLeftDrawer()" />
        </div>
        <breadcrumbs :show-icon="false" v-if="$q.screen.gt.sm" />
        <q-space />
        <toolbar-item />
      </q-toolbar>
      <q-separator />
      <tagview />
    </q-header>

    <!-- drawer start -->
    <q-drawer v-model="leftDrawerOpen" :width="230" show-if-above bordered>
      <div class="absolute-top q-pa-sm" style="height: 50px">
        <toolbar-title :title="'Windripple'" style="width: 100%" />
        <q-separator spaced="sm" inset />
      </div>
      <base-menu style="height: calc(100% - 50px); margin-top: 50px" />
    </q-drawer>
    <!-- drawer end -->

    <!-- page start -->
    <q-page-container class="app-main full-height">
      <router-view v-if="isRouterAlive" v-slot="{ Component, route }">
        <transition name="fade-slide" mode="out-in" appear>
          <keep-alive :max="10" :include="keepAliveStore.getKeepAliveList">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>
    <!-- page end -->
  </q-layout>
</template>

<script lang="ts">
export default {
  name: "MainLayout",
};
</script>

<script lang="ts" setup>
import { ref, nextTick, provide } from "vue";
import Tagview from "src/components/Tagview/Tagview.vue";
import BaseMenu from "src/components/Menu/BaseMenu.vue";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs.vue";
import ToolbarItem from "src/components/Toolbar/ToolbarItem.vue";
import ToolbarTitle from "src/components/Toolbar/ToolbarTitle.vue";
import { useKeepAliveStore } from "src/stores/keep-alive";
import { useToggle } from "@vueuse/shared";

const leftDrawerOpen = ref<boolean>(false);
const keepAliveStore = useKeepAliveStore();
const isRouterAlive = ref<boolean>(true)

const reloadPage = () => {
  isRouterAlive.value = false;
  nextTick(() => {
    isRouterAlive.value = true;
  });
}

provide<() => void>('reloadPage', reloadPage)

const toggleLeftDrawer = useToggle(leftDrawerOpen);
</script>

<style lang="scss" scoped>
.body--light {
  .header {
    color: black;
    background-color: white;
  }
}

.body--dark {
  .header {
    color: white;
    background-color: $dark;
  }
}

/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.25s;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
