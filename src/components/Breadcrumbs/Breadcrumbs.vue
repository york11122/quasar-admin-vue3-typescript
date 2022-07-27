<template>
  <q-breadcrumbs class="flex items-center" active-color="none">
    <transition-group appear enter-active-class="animated fadeInRight">
      <template v-for="(breadcrumb, index) in breadcrumbsStore.getBreadCrumbs">
        <q-breadcrumbs-el
          v-if="breadcrumb.title"
          name="breadcrumb"
          class="items-center"
          style="vertical-align: middle"
          :label="breadcrumb.title"
          :icon="breadcrumb.icon"
          :key="index + breadcrumb.title"
        >
          <div
            v-if="breadcrumbsStore.getBreadCrumbs.length !== index + 1"
            name="breadcrumb"
            style="margin: 0px 2px 0px 8px"
          >
            /
          </div>
        </q-breadcrumbs-el>
      </template>
    </transition-group>
  </q-breadcrumbs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useBreadcrumbsStore } from "src/stores/breadcrumbs";
export default defineComponent({
  name: "Breadcrumbs",
  setup() {
    const breadcrumbsStore = useBreadcrumbsStore();

    return { breadcrumbsStore };
  },
});
</script>
