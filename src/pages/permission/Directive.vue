<template>
  <base-content scrollable padding>
    <q-card-section class="q-gutter-md">
      <q-select style="width:200px" outlined label="user role" v-model="selectedPermission"
        :options="permissionOptions" emit-value @update:model-value="handlePermissionChange" />
      <div class="text-h6">
        {{ $t('permission.currentPermission') }}: {{ userStore.getUserRoles }}
      </div>
      <div class="text-subtitle2"> {{ $t('permission.description') }}</div>
    </q-card-section>
    <q-card-section class="q-gutter-md">
      <div class="text-h6">v-permission</div>
      <div class="q-gutter-sm">
        <q-btn v-permission="['admin', 'user']" unelevated color="primary"
          :label="`admin & user ${$t('permission.canSee')}`" />
        <q-btn v-permission="['admin']" unelevated color="primary" :label="`admin ${$t('permission.canSee')}`" />
        <q-btn v-permission="['user']" unelevated color="primary" :label="`user ${$t('permission.canSee')}`" />
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-md">
      <div class="text-h6">hasPermission</div>
      <div class="q-gutter-sm">
        <q-btn :disable="!hasPermission(['admin', 'user'])" unelevated color="primary"
          :label="`admin & user ${$t('permission.canClick')}`" />
        <q-btn :disable="!hasPermission(['admin'])" unelevated color="primary"
          :label="`admin ${$t('permission.canClick')}`" />
        <q-btn :disable="!hasPermission(['user'])" unelevated color="primary"
          :label="`user ${$t('permission.canClick')}`" />
      </div>
    </q-card-section>
  </base-content>
</template>

<script lang="ts" setup>
import { useUserStore } from "src/stores/user";
import { useAppStore } from "src/stores/app"
import { usePermission } from "src/composables/permission";
import { ref } from "vue";
import BaseContent from "src/components/BaseContent/BaseContent.vue";

defineOptions({ name: "Directive" });

const userStore = useUserStore();
const appStore = useAppStore();
const { hasPermission } = usePermission();

const selectedPermission = ref<string>(userStore.getUserRoles[0]);
const permissionOptions = [{ label: "super", value: "super" }, { label: "admin", value: "admin" }, { label: "user", value: "user" }]

const handlePermissionChange = () => {
  userStore.setUserRoles([selectedPermission.value]);
  appStore.reloadPage(200);
}

</script>
