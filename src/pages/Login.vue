<template>
  <div class="flex justify-center items-center bg-primary" style="height: 100%">
    <q-card flat class="row" style="border-radius: 20px;">
      <!-- <div class="col-6 flex justify-center items-center " v-show="$q.screen.gt.sm">
        <q-skeleton type="text" height="70%" width="50%" v-if="!isLottieFinished" />
        <lottie-web style="height: 70%" :path="defaultOptions.path" @isLottieFinish="handleFinish" />
      </div>
      <q-separator vertical inset v-if="$q.screen.gt.sm" /> -->
      <div class="col flex justify-center items-center">
        <q-card-section align="center" class="q-gutter-y-lg">
          <h3 class="text-uppercase">WINDRIPPLE</h3>

          <q-input v-model="username" class="logon-input" dense clearable outlined />
          <q-input v-model="password" class="logon-input" dense outlined :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>

          <q-btn class="full-width" rounded unelevated color="primary" :loading="loading" @click="login">登入
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


