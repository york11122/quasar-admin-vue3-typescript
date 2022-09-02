<template>
  <div class="flex justify-center items-center" style="height: 100%">
    <corner-bottom class="wave fit bg-black" />

    <div class="col-6 flex justify-center items-center " v-show="$q.screen.gt.sm">
      <q-skeleton type="text" height="70%" width="50%" v-if="!isLottieFinished" />
      <lottie-web :path="defaultOptions.path" @isLottieFinish="handleFinish" />
    </div>
    <login-panel v-model:username="loginData.username" v-model:password="loginData.password"
      v-model:loading="isFetching" @onLoginClick="onLoginClick" :message="message" />
  </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "src/stores/user"
import LottieWeb from "src/components/LottieWeb/LottieWeb.vue";
import CornerBottom from "src/components/Login/CornerBottom.vue"
import LoginPanel from "src/components/Login/LoginPanel.vue";
import { useMyApi } from "src/composables/myApi"

defineOptions({ name: "Login" })

const userStore = useUserStore()
const router = useRouter()
const message = ref<string>('')
const loginData = reactive<{ username: string, password: string }>({ username: 'admin', password: 'admin' })
const isLottieFinished = ref<boolean>(false)
const defaultOptions = ref<any>({
  path: 'https://assets1.lottiefiles.com/packages/lf20_gzl797gs.json',
  loop: true,
  animationSpeed: 1
})

const api = useMyApi()

const { data, isFetching, onFetchError: onLoginError, onFetchResponse: onLoginResponse, execute } = api<any>("/auth", { immediate: false }).post(loginData).json()

const onLoginClick = () => {
  message.value = ''
  execute()
}

onLoginError((error) => {
  if (data.value.message) {
    message.value = data.value.message
  }
})

onLoginResponse(async (res) => {
  userStore.setLoginToken(loginData.username)
  router.push("/")
})

const handleFinish = () => {
  isLottieFinished.value = true
}

</script>

<style scoped>
.wave {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>