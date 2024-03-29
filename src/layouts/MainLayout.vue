<template>
  <q-layout view="lHh lpR lff" class="full-height">
    <q-header class="q-py-xs header" height-hint="48" bordered
      style="box-shadow: rgba(0, 0, 0, 0) 0px 2px 12px 0px; padding-bottom: 2px">
      <q-toolbar style="margin-top: -5px">
        <div class="q-pr-md">
          <q-btn flat dense round aria-label="Menu" :icon="isDrawerOpen ? 'menu_open' : 'menu'"
            @click="toggleLeftDrawer()" />
        </div>
        <breadcrumbs class="text-weight-bold" :show-icon="false" v-if="$q.screen.gt.sm" />
        <q-space />
        <toolbar-item />
      </q-toolbar>
      <q-separator />
      <tagview />
    </q-header>

    <drawer ref="drawerRef" v-model="isDrawerOpen" title="Quasar Admin" />

    <theme-setting ref="settingRef" />
    <!-- page start -->
    <q-page-container class="app-main full-height">
      <router-view v-if="appStore.reloadFlag" v-slot="{ Component, route }">
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
import { ref } from "vue"
import { useKeepAliveStore } from "src/stores/keep-alive";
import { useAppStore } from "src/stores/app";

import Tagview from "src/components/Tagview/Tagview.vue";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs.vue";
import ToolbarItem from "src/components/Toolbar/ToolbarItem.vue";
import Drawer from 'src/components/Drawer/Drawer.vue';
import ThemeSetting from "src/components/Setting/ThemeSetting.vue";

import { useThemeStore } from "src/stores/theme"
import { storeToRefs } from "pinia"

const themeStore = useThemeStore()
const { headerBgColor, headerTextColor } = storeToRefs(themeStore)

const appStore = useAppStore();
const keepAliveStore = useKeepAliveStore();

const drawerRef = ref<typeof Drawer | null>(null);
const isDrawerOpen = ref<boolean>(false)
const toggleLeftDrawer = () => {
  drawerRef.value?.toggleDrawer();
}

const settingRef = ref<typeof ThemeSetting | null>(null);
const toggleSettingPanel = () => {
  settingRef.value?.toggleSettingPanel();
}

</script>

<style lang="scss" scoped>
.header {
  color: v-bind(headerTextColor);
  background: v-bind(headerBgColor);
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
