<template>
  <q-layout view="lHh lpR fFf" class="full-height">
    <q-header class="q-py-xs bg-white text-grey-8" height-hint="48" bordered style="
        box-shadow: rgba(0, 0, 0, 0) 0px 2px 12px 0px;
        padding-bottom: 2px;
      ">
      <q-toolbar style="margin-top: -5px">

        <div class="q-pr-md">
          <q-btn flat dense round aria-label="Menu" :icon="leftDrawerOpen === true ? 'menu_open' : 'menu'"
            @click="toggleLeftDrawer" />
        </div>

        <!-- breadcrumbs-->
        <breadcrumbs v-if="$q.screen.gt.sm" />

        <q-space />

        <!-- toolbar item-->
        <toolbar-item />

      </q-toolbar>

      <q-separator color="grey-3" />
      <!-- tagview-->
      <tagview />
    </q-header>

    <!-- drawer start -->
    <q-drawer v-model="leftDrawerOpen" :width="210" show-if-above bordered>
      <base-menu />
    </q-drawer>
    <!-- drawer end -->

    <!-- page start -->
    <q-page-container class="app-main full-height">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in" enter-active-class="animated fadeIn">
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
  name: "MainLayout"
}
</script>

<script lang="ts" setup>
import { ref } from "vue";
import Tagview from "src/components/TagView/TagView.vue";
import BaseMenu from "src/components/Menu/BaseMenu.vue";
import Breadcrumbs from "src/components/Breadcrumbs/Breadcrumbs.vue";
import ToolbarItem from "src/components/Toolbar/ToolbarItem.vue"
import { useKeepAliveStore } from "src/stores/keep-alive";

const leftDrawerOpen = ref<boolean>(false);
const keepAliveStore = useKeepAliveStore();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>