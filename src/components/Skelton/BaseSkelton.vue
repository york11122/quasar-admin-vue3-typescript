<template>
  <div class="q-pa-lg" v-if="show">
    <q-card flat>
      <q-skeleton height="150px" square />
      <q-card-section>
        <q-skeleton type="text" class="text-subtitle1" />
        <q-skeleton type="text" width="50%" class="text-subtitle1" />
        <q-skeleton type="text" class="text-caption" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: "BaseSkelton" });
withDefaults(defineProps<{ show: boolean }>(), { show: false });
</script>
