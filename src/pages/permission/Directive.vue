<template>
  <q-card flat class="q-gutter-md">
    <q-card-section class="q-gutter-md">
      <div class="text-h6">
        current user permission: {{ userStore.getUserRoles }}
      </div>
      <div class="text-subtitle2">*super user is fully eligible</div>
    </q-card-section>
    <q-card-section class="q-gutter-md">
      <div class="text-h6">v-permission</div>
      <div class="q-gutter-sm">
        <q-btn
          v-permission="['admin', 'user']"
          unelevated
          color="primary"
          label="admin & user can see"
        />
        <q-btn
          v-permission="['admin']"
          unelevated
          color="primary"
          label="only admin can see"
        />
        <q-btn
          v-permission="['user']"
          unelevated
          color="primary"
          label="only user can see"
        />
      </div>
    </q-card-section>
    <q-card-section class="q-gutter-md">
      <div class="text-h6">hasPermission</div>
      <div class="q-gutter-sm">
        <q-btn
          :disable="!hasPermission(['admin', 'user'])"
          unelevated
          color="primary"
          label="admin & user can click"
        />
        <q-btn
          :disable="!hasPermission(['admin'])"
          unelevated
          color="primary"
          label="only admin can click"
        />
        <q-btn
          :disable="!hasPermission(['user'])"
          unelevated
          color="primary"
          label="only user can click"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { useUserStore } from "src/stores/user";
import { usePermission } from "src/composables/permission";

defineOptions({ name: "Directive" });

const userStore = useUserStore();
const { hasPermission } = usePermission();
</script>
