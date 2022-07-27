<template>
  <q-page class="main-content">
    <q-scroll-area
      ref="scrollArea"
      :thumb-style="thumbStyle"
      :visible="false"
      style="height: 100%"
    >
      <slot></slot>
    </q-scroll-area>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
} from "vue";
import { QScrollArea, SessionStorage } from "quasar";
import { useRoute } from "vue-router";

export const thumbStyle = {
  right: "5px",
  borderRadius: "5px",
  backgroundColor: "#616161",
  width: "5px",
};

export const thumbStyleOfMenu = {
  borderRadius: "5px",
  backgroundColor: "rgba(144,147,153,0.9)",
  padding: "10px;",
  margin: "10px;",
  width: "3px",
};

export default defineComponent({
  name: "BaseContent",
  setup() {
    const route = useRoute();
    const scrollArea = ref<QScrollArea | null>(null);

    const basePath = ref<string>("");

    const scrollToPosition = (value: number) => {
      scrollArea.value?.setScrollPosition("horizontal", value, 300);
    };

    const getScrollPosition = () => {
      return scrollArea.value?.getScrollPosition();
    };

    onMounted(() => {
      basePath.value = route.path;

      const t = SessionStorage.getItem(basePath.value);
      if (t) {
        const toPosition = JSON.parse(t as string);
        scrollToPosition(toPosition.listScrollTop);
      }
    });

    onUnmounted(() => {
      SessionStorage.remove(basePath.value);
    });

    onActivated(() => {
      const t = SessionStorage.getItem(route.path);
      if (t) {
        const toPosition = JSON.parse(t as string);
        scrollToPosition(toPosition.listScrollTop);
      }
    });

    onDeactivated(() => {
      const position = getScrollPosition();
      SessionStorage.set(
        basePath.value,
        JSON.stringify({ listScrollTop: position ? position.top : 0 })
      );
    });

    return {
      thumbStyle,
      thumbStyleOfMenu,
      scrollArea,
      scrollToPosition,
      getScrollPosition,
    };
  },
});
</script>
