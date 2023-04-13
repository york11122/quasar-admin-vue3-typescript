<template>
  <q-card flat class="q-gutter-md fit">
    <q-card-section class="q-gutter-md">
      <q-select style="width:200px" outlined label="change user role" v-model="selectedPermission"
        :options="permissionOptions" emit-value @update:model-value="handlePermissionChange" />
      <div class="text-h6">
        current user permission: {{ userStore.getUserRoles }}
      </div>
      <div class="text-subtitle2">*super user is fully eligible</div>
    </q-card-section>
    <q-card-section class="q-gutter-md">
      <div class="text-h6">v-permission</div>
      <div class="q-gutter-sm">
        <q-btn v-permission="['admin', 'user']" unelevated color="primary" label="admin & user can see" />
        <q-btn v-permission="['admin']" unelevated color="primary" label="only admin can see" />
        <q-btn v-permission="['user']" unelevated color="primary" label="only user can see" />
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-md">
      <div class="text-h6">hasPermission</div>
      <div class="q-gutter-sm">
        <q-btn :disable="!hasPermission(['admin', 'user'])" unelevated color="primary" label="admin & user can click" />
        <q-btn :disable="!hasPermission(['admin'])" unelevated color="primary" label="only admin can click" />
        <q-btn :disable="!hasPermission(['user'])" unelevated color="primary" label="only user can click" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { useUserStore } from "src/stores/user";
import { usePermission } from "src/composables/permission";
import { ref } from "vue";
defineOptions({ name: "Directive" });

const userStore = useUserStore();
const { hasPermission } = usePermission();

const selectedPermission = ref<string>(userStore.getUserRoles[0]);
const permissionOptions = [{ label: "super", value: "super" }, { label: "admin", value: "admin" }, { label: "user", value: "user" }]

const handlePermissionChange = () => {
  userStore.setUserRoles([selectedPermission.value]);
}

</script>
