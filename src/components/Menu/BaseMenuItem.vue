<template>
  <template v-for="(item, index) in myRouter">
    <div class="base-menu-item" :key="index" v-if="item.meta?.isHidden !== true">
      <q-item-label v-if="item.meta?.itemLabel" header class="text-weight-bold text-uppercase" :key="item.meta.itemLabel">
        {{ item.meta.itemLabel }}
      </q-item-label>

      <!-- no children -->
      <q-item v-if="!item.children" :exact="item.path === '/'" clickable v-ripple :inset-level="initLevel"
        :style="initLevel === 0 ? 'padding-left: ;' : ''" active-class="baseItemActive"
        :active="$route.fullPath === handleLink(basePath, item.path)" @click="handleMenuClick(basePath, item.path)">
        <q-item-section avatar>
          <q-icon :name="item.meta?.icon" />
        </q-item-section>
        <q-item-section>
          {{ item.meta?.title }}
        </q-item-section>
        <q-item-section v-if="handleLink(basePath, item.path) === '#'" side>
          <q-icon name="fa-solid fa-up-right-from-square" size="10px" />
        </q-item-section>
      </q-item>
      <!-- has children -->
      <q-expansion-item v-else :duration="duration" :default-opened="item.meta?.isOpen"
        :header-style="expansionHeaderStyle(item.path)" :header-inset-level="initLevel" :icon="item.meta?.icon"
        :label="item.meta?.title">
        <!-- MenuItem initlevl + 0.2 ; concat parent path if router is existed -->
        <base-menu-item :my-router="item.children" :init-level="initLevel + 0.2"
          :base-path="basePath === '' ? item.path : basePath + '/' + item.path" :duration="duration" />
      </q-expansion-item>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Route } from "src/types/index"
import { Dark, openURL } from "quasar"
import { useThemeStore } from "src/stores/theme"
import { useAppStore } from "src/stores/app"
import { storeToRefs } from "pinia"
defineOptions({ name: "BaseMenuItem" })

interface Props {
  myRouter: Route[]
  initLevel?: number
  duration?: number
  basePath?: string
}

const props = withDefaults(defineProps<Props>(), { myRouter: () => [] as Route[], initLevel: 0, duration: 150, basePath: "" })

const route = useRoute();
const router = useRouter();
const themeStore = useThemeStore()
const appStore = useAppStore()

const { primaryColor, activeTextColor, activeBgColor } = storeToRefs(themeStore)

const handleLink = (basePath: string, itemPath: string) => {
  const link = basePath === "" ? itemPath : basePath + "/" + itemPath;
  if (link.indexOf("http") !== -1) {
    return "#";
  }
  return link;
};


const handleMenuClick = (basePath: string, itemPath: string) => {
  const link = basePath === "" ? itemPath : basePath + "/" + itemPath;
  const i = link.indexOf('http')
  if (i !== -1) {
    openURL(link.slice(i))
    return false
  }
  router.push(link)
};

const expansionHeaderStyle = computed(() => {
  return (path: any) => {
    let cssString = props.initLevel === 0 ? 'padding-left: ;' : ''
    cssString += route.fullPath.startsWith(path) ? `color: ${activeTextColor.value};` : ''
    if (appStore.isdrawerMini) {
      cssString += route.fullPath.startsWith(path) ? `background: ${activeBgColor.value};` : ""
    }
    return cssString
  }
})


</script>

<style lang="scss" scoped>
.base-menu-item {
  color: #2c3e50 !important;

  // .baseRootItemActive {
  //   color: v-bind(primaryColor) !important;
  // }

  .baseItemActive {
    color: v-bind(activeTextColor) !important;
    background: v-bind(activeBgColor);
    transition: all 0.618s;
    font-weight: bold;

    &:after {
      content: "";
      position: absolute;
      width: 3px;
      height: 100%;
      background: v-bind(primaryColor) !important;
      top: 0;
      right: 0;
    }
  }
}
</style>


