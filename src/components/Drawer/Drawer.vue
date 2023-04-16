<template>
  <q-drawer v-model="_modelValue" :mini="isMini" :width="230" show-if-above bordered :mini-to-overlay="isMiniOverlay"
    @mouseover="handleLeftDrawerMouse(MouseEvent.Over)" @mouseout="handleLeftDrawerMouse(MouseEvent.Out)">
    <div class="absolute-top q-pa-sm" style="height: 50px">
      <toolbar-title :title="title" style="width: 100%" :mini="isMini" />
      <q-separator spaced="sm" />
    </div>
    <base-menu style="height: calc(100% - 50px); margin-top: 50px" />
  </q-drawer>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useToggle } from "@vueuse/shared";
import { useVModel } from "@vueuse/core";
import ToolbarTitle from "src/components/Toolbar/ToolbarTitle.vue";
import BaseMenu from "src/components/Menu/BaseMenu.vue";
enum MouseEvent {
  Over = 'mouseover',
  Out = 'mouseout'
}

defineOptions({ name: "Drawer" })

const props = withDefaults(defineProps<{ modelValue: boolean, title: string }>(), {
  modelValue: false,
  title: "",
});

const emit = defineEmits<{
  (e: "update:modelValue"): void;
}>();

const _modelValue = useVModel(props, "modelValue", emit);

const isMini = ref<boolean>(false);
const isMiniOpen = ref<boolean>(false);
const isMiniOverlay = ref<boolean>(false);

const toggleDrawerOpen = useToggle(_modelValue);
const toggleDrawerMini = useToggle(isMini);

//點擊loop 正常-> 縮小-> 關閉-> 正常
const toggleDrawer = () => {
  if (_modelValue.value) {
    isMini.value ? toggleDrawerOpen(false) : toggleDrawerMini(true)
  }
  else {
    toggleDrawerMini(false)
    toggleDrawerOpen(true)
  }
}


const handleLeftDrawerMouse = (type: MouseEvent) => {
  if (_modelValue.value) {
    if (isMini.value) {
      if (type === MouseEvent.Over && !isMiniOpen.value) {
        isMiniOverlay.value = true
        isMini.value = false;
        isMiniOpen.value = true;
      }
    }
    else {
      if (type === MouseEvent.Out && isMiniOpen.value) {
        isMiniOverlay.value = false
        isMini.value = true;
        isMiniOpen.value = false;
      }
    }
  }
}

defineExpose({
  toggleDrawer,
  toggleDrawerOpen,
  toggleDrawerMini
})

</script>
