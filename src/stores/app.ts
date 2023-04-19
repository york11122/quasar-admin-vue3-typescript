import { defineStore } from "pinia";
import { nextTick } from "vue"

interface APP {
    reloadFlag: boolean;
}

export const useAppStore = defineStore("app", {
    state: (): APP => ({
        reloadFlag: true,
    }),

    getters: {
        getReloadFlag(state): boolean {
            return state.reloadFlag;
        }
    },

    actions: {
        async reloadPage(duration: number = 0) {
            this.reloadFlag = false;
            await nextTick();
            if (duration) {
                setTimeout(() => {
                    this.reloadFlag = true;
                }, duration);
            } else {
                this.reloadFlag = true;
            }
        }
    },
});
