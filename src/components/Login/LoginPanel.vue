<template>
  <q-card flat class="row" style="border-radius: 20px; width: 85%; max-width: 400px">
    <div class="absolute-top-left q-pa-md">
      <dark-mode />
    </div>
    <div class="col flex justify-center items-center q-pa-md">
      <q-card-section>
        <ToolbarTitle title="Quasar Admin" size="20px" />
      </q-card-section>
      <q-card-section align="center" class="fit q-gutter-y-sm">
        <q-form ref="loginForm" class="custom-form-error-message">
          <q-input v-model="username" placeholder="請輸入帳號" dense clearable outlined no-error-icon lazy-rules
            :rules="[(val) => !!val || '請輸入帳號']" />
          <q-input v-model="password" placeholder="請輸入密碼" dense outlined no-error-icon :type="isPwd ? 'password' : 'text'"
            lazy-rules :rules="[(val) => !!val || '請輸入密碼']">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <q-btn class="full-width" size="1.2em" rounded unelevated color="primary" :loading="loading"
            @click="onLoginClick">
            登入
          </q-btn>
          <q-banner v-if="message !== ''" inline-actions dense rounded class="text-red">
            {{ message }}
          </q-banner>
        </q-form>
        <q-separator spaced="lg" />
        <q-card-section class="text-caption text-grey-7">
          <span>some descriptions</span>
        </q-card-section>
      </q-card-section>
    </div>
  </q-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useVModels } from "@vueuse/core";
import { QForm } from "quasar";
import DarkMode from "src/components/Toolbar/DarkMode.vue";
import ToolbarTitle from '../Toolbar/ToolbarTitle.vue';

defineOptions({ name: "Login" });

interface Props {
  username: string | undefined;
  password: string | undefined;
  loading: boolean;
  message: string;
}

const props = withDefaults(defineProps<Props>(), {
  username: "",
  password: "",
  loading: false,
  message: "",
});

const emit = defineEmits<{
  (e: "update:username"): void;
  (e: "update:password"): void;
  (e: "update:loading"): void;
  (e: "onLoginClick"): void;
}>();

const isPwd = ref<boolean>(true);
const loginForm = ref<QForm | null>(null);
const { username, password, loading, message } = useVModels(props, emit);

const onLoginClick = async () => {
  const success = await loginForm.value?.validate();
  if (success) {
    emit("onLoginClick");
  }
};
</script>
