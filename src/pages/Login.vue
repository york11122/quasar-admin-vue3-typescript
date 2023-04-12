<template>
  <div class="flex justify-center items-center" style="height: 100%">
    <corner-bottom class="wave fit bg-black" />

    <div
      class="col-6 flex justify-center items-center"
      v-show="$q.screen.gt.sm"
    >
      <q-skeleton
        type="text"
        height="70%"
        width="50%"
        v-if="!isLottieFinished"
      />
      <lottie-web
        :path="defaultOptions.path"
        @isLottieFinish="handleLottieFinish"
      />
    </div>
    <login-panel
      v-model:username="loginData.username"
      v-model:password="loginData.password"
      v-model:loading="isFetching"
      @onLoginClick="onLoginClick"
      :message="message"
    />
  </div>
</template>

<script lang="ts" setup>
// Import necessary libraries and components
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";
import LottieWeb from "src/components/LottieWeb/LottieWeb.vue";
import CornerBottom from "src/components/Login/CornerBottom.vue";
import LoginPanel from "src/components/Login/LoginPanel.vue";
import { useUserAPI } from "src/api/services/user";
// Define component options
defineOptions({ name: "Login" });

// Setup user store, router, and message reference
const userStore = useUserStore();
const router = useRouter();
const message = ref<string>("");
const { login } = useUserAPI();

// Lottie configuration
const isLottieFinished = ref<boolean>(false);
const defaultOptions = ref<any>({
  path: "https://assets1.lottiefiles.com/packages/lf20_gzl797gs.json",
  loop: true,
  animationSpeed: 1,
});
const handleLottieFinish = () => {
  isLottieFinished.value = true;
};

// Login data and configuration
const loginData: { username: string; password: string } = reactive({
  username: "admin",
  password: "admin",
});

// Setup API call for login
const {
  data: loginResponse,
  isFetching,
  onFetchError: onLoginError,
  onFetchResponse: onLoginResponse,
  execute: executeLogin,
} = login(loginData, { immediate: false });

// Function to handle login button click
const onLoginClick = () => {
  message.value = "";
  executeLogin();
};

// Function to handle login errors
onLoginError((error) => {
  if (loginResponse.value.errorCode) {
    message.value = loginResponse.value.message;
  }
});

// Function to handle successful login response
onLoginResponse((res) => {
  userStore.setLoginToken(loginResponse.value.accessToken);
  router.push("/");
});
</script>

<style scoped>
.wave {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
