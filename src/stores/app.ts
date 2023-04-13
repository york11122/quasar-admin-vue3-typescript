import { defineStore } from "pinia";
import { nextTick } from "vue"

interface APP {
    reloadFlag: boolean;
    showLeftDrawer: boolean;
}

export const useAppStore = defineStore("app", {
    state: (): APP => ({
        reloadFlag: true,
        showLeftDrawer: true
    }),

    getters: {
        getReloadFlag(state): boolean {
            return state.reloadFlag;
        },
        isShowLeftDrawer(state): boolean {
            return state.showLeftDrawer;
        },
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
        },

        openLeftDrawer(showLeftDrawer: boolean) {
            this.showLeftDrawer = showLeftDrawer;
        }
    },
});
