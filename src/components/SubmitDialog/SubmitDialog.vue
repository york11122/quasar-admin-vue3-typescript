<template>
  <q-dialog v-model="_modelValue" persistent>
    <q-card style="width: 1200px; max-width: 90vw">
      <q-card-section class="row">
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-separator />

      <q-card-section style="height: 500px; max-height: 65vh" class="scroll">
        <slot></slot>
      </q-card-section>

      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="取消" v-close-popup />
        <q-btn flat label="送出" color="primary" :loading="_isLoading" @click="onSubmit" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";

defineOptions({ name: "SubmitDialog" });

interface Props {
  modelValue: boolean;
  title: string;
  isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: "",
  isLoading: false,
});

const emit = defineEmits<{
  (e: "update:modelValue"): void;
  (e: "update:isLoading"): void;
  (e: "onSubmit"): void;
}>();

const _modelValue = useVModel(props, "modelValue", emit);
const _isLoading = useVModel(props, "isLoading", emit);

const onSubmit = async () => {
  emit("onSubmit");
};
</script>

<style scoped></style>
