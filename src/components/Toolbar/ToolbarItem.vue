<template>
  <div class="q-gutter-sm row items-center no-wrap">
    <q-separator vertical />
    <LangSelector />
    <q-separator vertical />
    <q-btn dense flat icon="fa-brands fa-github" href="https://github.com/york11122/quasar-admin-vue3-typescript"
      target="_blank">
      <q-tooltip>{{ $t('layout.github') }}</q-tooltip>
    </q-btn>

    <q-btn dense flat :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'" @click="$q.fullscreen.toggle()"
      v-if="$q.screen.gt.sm">
      <q-tooltip>{{ $t('layout.fullScreen') }}</q-tooltip>
    </q-btn>

    <dark-mode />

    <q-btn dense flat icon="refresh" @click="appStore.reloadPage(200)" v-if="$q.screen.gt.sm">
      <q-tooltip>{{ $t('layout.refresh') }}</q-tooltip>
    </q-btn>


    <q-btn round dense flat icon="notifications">
      <q-badge color="red" text-color="" floating> 2 </q-badge>
      <q-tooltip>{{ $t('layout.notification') }}</q-tooltip>
    </q-btn>

    <q-btn round flat>
      <q-avatar color="primary" text-color="white">
        {{ userStore.getFirstCharacterOfUserName }}
      </q-avatar>
      <q-menu>
        <q-list dense>
          <q-item>
            <q-item-section>
              <div>
                Signed in as <br /><strong>{{ userStore.getUserName }}</strong>
              </div>
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
import { useUserStore } from "src/stores/user";
import DarkMode from "src/components/Toolbar/DarkMode.vue";
import { useAppStore } from "src/stores/app"
import LangSelector from "src/components/Toolbar/LangSelector.vue"

defineOptions({ name: "ToolbarItem" });

const userStore = useUserStore();
const appStore = useAppStore()

const logout = () => {
  userStore.setLogout();
};
</script>
