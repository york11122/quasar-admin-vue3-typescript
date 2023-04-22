<template>
  <q-breadcrumbs class="flex items-center" active-color="none">
    <transition-group appear enter-active-class="animated fadeInRight">
      <template v-for="(breadcrumb, index) in breadcrumbsStore.getBreadCrumbs">
        <q-breadcrumbs-el v-if="breadcrumb.title" name="breadcrumb" :label="$t(breadcrumb.title)"
          :icon="showIcon ? breadcrumb.icon : undefined" :key="index + breadcrumb.title">
          <div v-if="breadcrumbsStore.getBreadCrumbs.length !== index + 1" name="breadcrumb"
            style="margin: 0px 0px 0px 8px">
            /
          </div>
        </q-breadcrumbs-el>
      </template>
    </transition-group>
  </q-breadcrumbs>
</template>

<script lang="ts" setup>
import { useBreadcrumbsStore } from "src/stores/breadcrumbs";

interface Props {
  showIcon?: boolean
}

defineOptions({ name: "Breadcrumbs" })

withDefaults(defineProps<Props>(), { showIcon: true })

const breadcrumbsStore = useBreadcrumbsStore();
</script>
