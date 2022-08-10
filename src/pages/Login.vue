<template>
  <div class="flex justify-center items-center" style="height: 100%">
    <corner-bottom class="wave fit bg-black" />

    <div class="col-6 flex justify-center items-center " v-show="$q.screen.gt.sm">
      <q-skeleton type="text" height="70%" width="50%" v-if="!isLottieFinished" />
      <lottie-web :path="defaultOptions.path" @isLottieFinish="handleFinish" />
    </div>
    <q-card flat class="row" style="border-radius: 20px;  width:85%; max-width: 400px;">
      <div class="col flex justify-center items-center q-pa-md">
        <q-card-section>
          <q-btn flat>
            <q-icon name="fa-solid fa-shield-dog" size="30px" />
            <q-toolbar-title shrink class="text-weight-bold">
              Windripple
            </q-toolbar-title>
          </q-btn>
        </q-card-section>
        <q-card-section align="center" class="q-gutter-y-lg fit">
          <q-input v-model="username" placeholder="請輸入帳號" dense clearable outlined />
          <q-input v-model="password" placeholder="請輸入密碼" dense outlined :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>
          <q-btn class="full-width" size="1.2em" rounded unelevated color="primary" :loading="loading" @click="login">
            登入
          </q-btn>
        </q-card-section>

      </div>
    </q-card>
  </div>

</template>

<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { SessionStorage, Notify } from "quasar"
import LottieWeb from "src/components/LottieWeb/LottieWeb.vue";
import CornerBottom from "src/components/Login/CornerBottom.vue"

defineOptions({ name: "Login" })

const router = useRouter()
const isPwd = ref<boolean>(true)
const username = ref<string>('username')
const password = ref<string>('password')
const loading = ref<boolean>(false)
const isLottieFinished = ref<boolean>(false)
const defaultOptions = ref<any>({
  path: 'https://assets1.lottiefiles.com/packages/lf20_gzl797gs.json',
  loop: true,
  animationSpeed: 1
})

const login = async () => {
  SessionStorage.set('access_token', "accesstoken")
  SessionStorage.set('user', { username: username.value, role: "user" })

  await router.push("/")

  Notify.create({
    icon: 'insert_emoticon',
    message: 'hi，cimo 欢迎回来',
    color: 'green',
    position: 'top',
    timeout: 1500
  })
}

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