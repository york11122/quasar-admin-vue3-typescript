<template>
  <base-content>
    <div style="margin: 0 auto; max-width: 700px;">
      <q-skeleton type="text" height="150px" v-if="!isLottieFinished" />
      <lottie-web ref="lottieRef" :path="defaultOptions.path" :loop="defaultOptions.loop"
        :animation-speed="defaultOptions.animationSpeed" @isLottieFinish="handleLottieFinish" />
      <div class="row justify-center" style="margin-left: 10px;margin-right: 10px">
        <q-badge color="secondary" class="justify-start">
          Speed: {{ defaultOptions.animationSpeed }}
        </q-badge>
        <q-slider v-model="defaultOptions.animationSpeed" :min="0" :max="3" :step="0.5" label />
        <q-btn-group>
          <q-btn color="primary" icon="play_arrow" @click="play">
            <q-tooltip>播放</q-tooltip>
          </q-btn>
          <q-btn color="primary" icon="pause" @click="pause">
            <q-tooltip>暂停</q-tooltip>
          </q-btn>
          <q-btn color="primary" icon="stop" @click="stop">
            <q-tooltip>停止</q-tooltip>
          </q-btn>
        </q-btn-group>
      </div>
    </div>
  </base-content>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import LottieWeb from 'src/components/LottieWeb/LottieWeb.vue';
import BaseContent from 'src/components/BaseContent/BaseContent.vue';

defineOptions({ name: "Lottie" })

const lottieRef = ref<typeof LottieWeb | null>(null)
const isLottieFinished = ref<boolean>(false)
const defaultOptions = ref<any>({
  path: 'https://assets1.lottiefiles.com/packages/lf20_gzl797gs.json',
  loop: true,
  animationSpeed: 1
})


const play = () => {
  lottieRef.value?.play()
}

const stop = () => {
  lottieRef.value?.stop()
}

const pause = () => {
  lottieRef.value?.pause()
}

const handleLottieFinish = (e: boolean) => {
  isLottieFinished.value = e
}

</script>
