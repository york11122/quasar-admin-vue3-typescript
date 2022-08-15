<template>
    <div class="q-pa-md fit">
        <base-skelton :show="loading" />
        <iframe v-show="!loading" ref="iframe" class="fit" style="border:none;" :src="src"></iframe>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import BaseSkelton from "src/components/Skelton/BaseSkelton.vue";

defineOptions({ name: "Iframe" })
withDefaults(defineProps<{ src: string }>(), { src: "" });

const loading = ref<boolean>(false)
const iframe = ref<any>(null)

onMounted(() => {
    loading.value = true;
    if (iframe.attachEvent) {
        // IE
        iframe.value.attachEvent('onload', () => { loading.value = false; });
    } else {
        // not IE
        iframe.value.onload = () => { loading.value = false; };
    }
})

</script>

<style scoped>
</style>
