<template>
  <div ref="lottieBox"></div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from "vue"
import lottie, { AnimationItem } from 'lottie-web'

defineOptions({ name: "LottieWeb" })

interface Props {
  animationData?: object,
  path?: string,
  loop?: boolean,
  animationSpeed?: number
}

const props = withDefaults(defineProps<Props>(), { loop: true, animationSpeed: 1 })

const emit = defineEmits<{
  (e: 'isLottieFinish', isLottieFinish: boolean): void
}>()

const lottieBox = ref<Element | null>(null)
let lottieInstance = ref<AnimationItem | null>(null);

const initLottie = () => {
  lottieInstance.value = lottie.loadAnimation({
    container: lottieBox.value as Element,
    renderer: 'svg',
    loop: props.loop,
    path: props.path,
    animationData: props.animationData
  })

  lottieInstance.value.addEventListener('data_ready', isLottieFinish)
}

const stop = () => {
  lottieInstance.value?.stop()
}

const play = () => {
  lottieInstance.value?.play()
}

const pause = () => {
  lottieInstance.value?.pause()
}

const onSpeedChange = (speed: number) => {
  lottieInstance.value?.setSpeed(speed)
}

const isLottieFinish = () => {
  emit("isLottieFinish", true)
}

const stopHandle = watch(() => props.animationSpeed, (newValue, oldValue) => {
  onSpeedChange(newValue)
});

onMounted(() => {
  initLottie()
})

onUnmounted(() => {
  lottieInstance.value?.destroy()
  lottieInstance.value = null
  stopHandle()
})

defineExpose({ play, stop, pause })

</script>
