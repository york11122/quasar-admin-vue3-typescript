<template>
  <q-layout view="hHh lpR fFf" class="full-height">
    <q-header class="q-py-xs bg-white text-grey-8" height-hint="48" style="
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
        padding-bottom: 2px;
      ">
      <q-toolbar style="margin-top: -4px">
        <q-btn flat dense round aria-label="Menu" :icon="leftDrawerOpen === true ? 'menu_open' : 'menu'"
          @click="toggleLeftDrawer" />
        <tool-bar-title :title="'WINDRIPPLE'" />
        <breadcrumbs v-if="$q.screen.gt.sm" />
        <q-space />
      </q-toolbar>

      <q-separator color="grey-3" />
      <tag-view />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" :width="240" show-if-above bordered>
      <base-menu />
    </q-drawer>

    <q-page-container class="app-main full-height">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in" enter-active-class="animated fadeIn">
          <keep-alive :max="10" :include="keepAliveStore.getKeepAliveList">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
export default {
  name: "MainLayout"
}
</script>

<script lang="ts" setup>
import { ref } from "vue";
import TagView from "../components/TagView/TagView.vue";
import BaseMenu from "../components/Menu/BaseMenu.vue";
import ToolBarTitle from "../components/ToolBar/ToolBarTitle.vue";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs.vue";
import { useKeepAliveStore } from "src/stores/keep-alive";

const leftDrawerOpen = ref<boolean>(false);
const keepAliveStore = useKeepAliveStore();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>