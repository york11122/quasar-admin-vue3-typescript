<template>
  <q-card flat bordered>
    <q-card-section>
      <q-input dense outlined no-error-icon v-model="input" label="新增標籤"
        placeholder="ADD TAG (PRESS ENTER TO ADD NEW TAG)" @keydown.enter="addTag">
        <template v-slot:append>
          <q-btn dense unelevated icon="add" @click="addTag" />
        </template>
      </q-input>
      <div class="q-pa-md q-gutter-sm truncate-chip-labels">
        <q-chip v-for="(tag, i) in _modelValue" :key="i" icon-remove="close" removable square outline
          @remove="removeTag(tag)">
          <div class="ellipsis">
            {{ tag }}
            <q-tooltip>{{ tag }}</q-tooltip>
          </div>
        </q-chip>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useVModel } from "@vueuse/core";

defineOptions({ name: "TagInput" });

const input = ref<string>("");

const props = withDefaults(defineProps<{ modelValue: string[] }>(), {
  modelValue: () => [],
});

const emit = defineEmits<{
  (e: "update:modelValue"): void;
}>();

const _modelValue = useVModel(props, "modelValue", emit);

const removeTag = (tag: string) => {
  const index = _modelValue.value.indexOf(tag);
  if (index > -1) {
    _modelValue.value.splice(index, 1);
  }
};

const addTag = () => {
  if (input.value) {
    const index = _modelValue.value.indexOf(input.value);
    if (index > -1) {
      input.value = "";
      return;
    }
    _modelValue.value.push(input.value);
    input.value = "";
  }
};
</script>
