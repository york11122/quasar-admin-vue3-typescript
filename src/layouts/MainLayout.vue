<template>
  <q-layout view="hHh lpR fFf" class="full-height">
    <q-header
      class="q-py-xs bg-white text-grey-8"
      height-hint="48"
      style="
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;
        padding-bottom: 2px;
      "
    >
      <q-toolbar style="margin-top: -4px">
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          :icon="leftDrawerOpen === true ? 'menu_open' : 'menu'"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
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

    <q-page-container class="full-height">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :max="10" :include="keepAliveStore.getKeepAliveList">
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import TagView from "../components/TagView/TagView.vue";
import BaseMenu from "../components/Menu/BaseMenu.vue";
import ToolBarTitle from "../components/ToolBar/ToolBarTitle.vue";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs.vue";
import { useKeepAliveStore } from "src/stores/keep-alive";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    TagView,
    BaseMenu,
    Breadcrumbs,
    ToolBarTitle,
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const keepAliveStore = useKeepAliveStore();
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      keepAliveStore,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>