<template>
  <q-dialog v-model="openSettingPanel" full-height position="right">
    <q-card style="width: 350px">
      <q-card-section class="row">
        <div class="text-weight-bold text-h6">{{ $t('themeSetting.title') }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-sm">
        <div class="text-weight-bold text-subtitle2">{{ $t('themeSetting.themeColor') }}</div>
        <q-color v-model="hex" flat bordered no-header-tabs @change="handleColorChange" />
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-sm">
        <div class="text-weight-bold text-subtitle2">{{ $t('themeSetting.setting') }}</div>
        <q-toggle v-model="isDrawerMini" color="primary" checked-icon="check" unchecked-icon="clear" />
        <DarkMode />
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-btn class="fixed" size="17px" unelevated color="primary" style="right: 5px; top: 250px; z-index:1000" dense
    icon="fa-solid fa-gear" @click="toggleSettingPanel()" />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useToggle } from "@vueuse/shared";
import { useThemeStore } from "src/stores/theme"
import { useAppStore } from "src/stores/app"
import { storeToRefs } from "pinia"
import DarkMode from "../Toolbar/DarkMode.vue";

defineOptions({ name: "ThemeSetting" })

const openSettingPanel = ref<boolean>(false)
const toggleSettingPanel = useToggle(openSettingPanel);

const themeStore = useThemeStore()
const appStore = useAppStore()
const { isDrawerMini } = storeToRefs(appStore)

const hex = ref<string>(themeStore.primaryColor)

defineExpose({ toggleSettingPanel })

const handleColorChange = (colorHex: string) => {
  themeStore.setThemeColor(colorHex)
}

</script>

<style scoped></style>
