<template>
  <div class="q-gutter-sm row items-center no-wrap">

    <q-btn dense flat :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" @click="$q.fullscreen.toggle()"
      v-if="$q.screen.gt.sm">
      <q-tooltip>全螢幕</q-tooltip>
    </q-btn>
    <q-btn round dense flat icon="notifications">
      <q-badge color="red" text-color="" floating>
        2
      </q-badge>
      <q-tooltip>通知</q-tooltip>
    </q-btn>
    <q-btn round flat>
      <q-menu>
        <div class="row no-wrap q-pa-md">

          <div class="column items-center">
            <q-avatar size="72px">
            </q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">Hi！ CIMO</div>

            <q-btn color="primary" label="Logout" size="sm" v-close-popup @click="logout" />
          </div>
        </div>
      </q-menu>

      <q-tooltip>账号</q-tooltip>
    </q-btn>

  </div>
</template>

<script lang="ts">
export default {
  name: "ToolbarItem"
}
</script>

<script lang="ts" setup>
import { useUserStore } from "src/stores/user"
import { useRouter } from "vue-router"

const router = useRouter()
const userStore = useUserStore()

const logout = () => {
  userStore.logout()
  router.push({ name: "Login" })
}
</script>
