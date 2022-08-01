<template>
  <div class="flex justify-center items-center bg-primary" style="height: 100%">
    <q-card flat bordered class="row" style="width: 60vw;min-width: 300px;">
      <div class="col-6 flex justify-center items-center " v-show="$q.screen.gt.sm">
        <q-skeleton type="text" height="70%" width="50%" v-if="!isLottieFinished" />
        <lottie-web style="height: 70%" :path="defaultOptions.path" @isLottieFinish="handleFinish" />
      </div>
      <q-separator vertical inset v-if="$q.screen.gt.sm" />
      <div class="col flex justify-center items-center">
        <q-card square flat style="min-width: 290px;height: 100%; width: 60%;">
          <q-card-section align="center">
            <h3 class="text-uppercase">WINDRIPPLE</h3>

            <q-input class="logon-input" clearable standout="bg-cyan text-white" bottom-slots v-model="username"
              label="账号">
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>

            <q-input class="logon-input" standout="bg-cyan text-white" bottom-slots v-model="password" label="密码"
              :type="isPwd ? 'password' : 'text'" hint="">
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                  @click="isPwd = !isPwd" />
              </template>
            </q-input>

            <q-btn :loading="loading" unelevated style="font-size: large;" @click="login">登入
            </q-btn>

          </q-card-section>
        </q-card>
      </div>
    </q-card>
  </div>

</template>

<script lang="ts">
export default {
  name: "Login",
}
</script>

<script lang="ts" setup>
import { ref } from "vue"
import LottieWeb from "src/components/LottieWeb/LottieWeb.vue";

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

const login = () => {
  console.log('login click')
}

const handleFinish = () => {
  isLottieFinished.value = true
}

</script>


