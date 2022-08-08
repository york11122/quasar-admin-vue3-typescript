<template>
  <div class="main-content">
    <q-scroll-area ref="scrollArea" :thumb-style="thumbStyle" :visible="false" style="height: 100%" @scroll="onScroll">
      <slot></slot>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <q-btn class="toTopBtn" fab padding="10px" v-show="showToTopBtn" icon="sym_r_expand_less" @click="toTop" />
        </transition>
      </q-page-sticky>
    </q-scroll-area>

  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
} from "vue";
import { QScrollArea, SessionStorage } from "quasar";
import { useRoute } from "vue-router";

defineOptions({ name: "BaseContent" })

interface scrollInfo {
  horizontalContainerSize: number;
  horizontalPercentage: number;
  horizontalPosition: number;
  horizontalSize: number;
  verticalContainerSize: number;
  verticalPercentage: number;
  verticalPosition: number;
  verticalSize: number;

}

interface scrollPosition {
  top: number;
  left: number;
}

const thumbStyle = {
  right: "5px",
  borderRadius: "5px",
  backgroundColor: "#616161",
  width: "5px",
};

const route = useRoute();
const scrollArea = ref<QScrollArea | null>(null);
const basePath = ref<string>("");
const showToTopBtn = ref<boolean>(false);

const scrollToPosition = (value: number, duration: number = 0) => {
  scrollArea.value?.setScrollPosition("vertical", value, duration);
};

const getScrollPosition = () => {
  return scrollArea.value?.getScrollPosition();
};

const onScroll = (info: scrollInfo) => {
  (info.verticalPercentage >= 0.1) ? showToTopBtn.value = true : showToTopBtn.value = false
}

const toTop = () => {
  scrollToPosition(0, 300)
}

onMounted(() => {
  basePath.value = route.fullPath;

  const t: scrollPosition | null = SessionStorage.getItem(basePath.value);
  if (t) {
    scrollToPosition(t.top);
  }
});

onUnmounted(() => {
  SessionStorage.remove(basePath.value);
});

onActivated(() => {
  const t: scrollPosition | null = SessionStorage.getItem(route.fullPath);
  if (t) {
    scrollToPosition(t.top);
  }
});

onDeactivated(() => {
  const position = getScrollPosition();
  SessionStorage.set(
    basePath.value,
    position
  );
});
</script>

<style lang="scss" scoped>
.body--light {
  .toTopBtn {
    color: $primary;
    background-color: white;
  }
}

.body--dark {
  .toTopBtn {
    color: $ACTIVE_COLOR_DARK;
    background-color: $ITEM_COLOR_DARK;
  }
}
</style>
