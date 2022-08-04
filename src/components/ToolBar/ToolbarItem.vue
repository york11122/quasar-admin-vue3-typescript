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
      <q-avatar color="primary" text-color="white">
        {{ userStore.getFirstCharacterOfUserName }}
      </q-avatar>
      <q-menu>
        <q-list dense>
          <q-item>
            <q-item-section>
              <div>Signed in as <br /><strong>{{ userStore.getUserName }}</strong></div>
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>
              <div>
                <q-icon name="tag_faces" color="blue-9" size="18px" />
                Set your status
              </div>
            </q-item-section>
          </q-item>
          <q-separator />

          <q-item clickable>
            <q-item-section @click="logout">Sign out</q-item-section>
          </q-item>
        </q-list>
      </q-menu>

      <q-tooltip>使用者</q-tooltip>
    </q-btn>

  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from "src/stores/user"
import { useRouter } from "vue-router"

defineOptions({ name: "ToolbarItem" })

const router = useRouter()
const userStore = useUserStore()

const logout = () => {
  userStore.logout()
  router.push({ name: "Login" })
}

</script>
