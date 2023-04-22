<template>
  <q-select v-model="locale" :options="localeOptions" dense borderless emit-value map-options options-dense
    @update:model-value="handleSelectLanguage">
    <template v-slot:prepend>
      <q-icon name="language" />
    </template>
  </q-select>
</template>

<script lang="ts" setup>
import { LocalStorage } from "quasar"
import { onMounted } from "vue"
import { useI18n } from 'vue-i18n';

defineOptions({ name: "LangSelector" })

const { locale } = useI18n({ useScope: 'global' })
const localeOptions = [
  { value: 'en-US', label: 'English' },
  { value: 'zh-TW', label: '繁體中文' }
]

onMounted(() => {
  const language: string | null = LocalStorage.getItem("lang")
  if (language !== null) {
    locale.value = language
  }
})

const handleSelectLanguage = () => {
  LocalStorage.set("lang", locale.value)
}
</script>
