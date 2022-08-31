<template>
    <span>{{ value }}</span>
</template>
  <script lang="ts" setup>
  import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
  import { TransitionPresets, useTransition } from '@vueuse/core';
  import { isNumber } from 'src/utils/typeof';
  
  defineOptions({ name: 'CountTo' });
  
  type TansitionKey = keyof typeof TransitionPresets;
  
  interface Props {
      startValue?: number;
      endValue?: number;
      duration?: number;
      autoplay?: boolean;
      decimals?: number;
      prefix?: string;
      suffix?: string;
      separator?: string;
      decimal?: string;
      useEasing?: boolean;
      transition?: TansitionKey;
  }
  
  const props = withDefaults(defineProps<Props>(), {
      startValue: 0,
      endValue: 2021,
      duration: 1500,
      autoplay: true,
      decimals: 0,
      prefix: '',
      suffix: '',
      separator: ',',
      decimal: '.',
      useEasing: true,
      transition: 'linear'
  });
  
  interface Emits {
      (e: 'on-started'): void;
      (e: 'on-finished'): void;
  }
  
  const emit = defineEmits<Emits>();
  
  const source = ref(props.startValue);
  let outputValue = useTransition(source);
  const value = computed(() => formatNumber(outputValue.value));
  const disabled = ref(false);
  
  function run() {
      outputValue = useTransition(source, {
          disabled,
          duration: props.duration,
          onStarted: () => emit('on-started'),
          onFinished: () => emit('on-finished'),
          ...(props.useEasing ? { transition: TransitionPresets[props.transition] } : {})
      });
  }
  
  function start() {
      run();
      source.value = props.endValue;
  }
  
  function formatNumber(num: number | string) {
      if (!num) {
          return '';
      }
      const { decimals, decimal, separator, suffix, prefix } = props;
      let number = Number(num).toFixed(decimals);
      number = String(number);
  
      const x = number.split('.');
      let x1 = x[0];
      const x2 = x.length > 1 ? decimal + x[1] : '';
      const rgx = /(\d+)(\d{3})/;
      if (separator && !isNumber(separator)) {
          while (rgx.test(x1)) {
              x1 = x1.replace(rgx, `$1${separator}$2`);
          }
      }
      return prefix + x1 + x2 + suffix;
  }
  
  const stopWatch = watch([() => props.startValue, () => props.endValue], () => {
      if (props.autoplay) {
          start();
      }
  });
  
  const stopWatchEffect = watchEffect(() => {
      source.value = props.startValue;
  });
  
  onMounted(() => {
      if (props.autoplay) {
          start();
      }
  });
  
  onUnmounted(() => {
      stopWatch()
      stopWatchEffect()
  })
  </script>