import { defineStore } from "pinia";
import { nextTick } from "vue";

interface APP {
  reloadFlag: boolean;
  isdrawerMini: boolean;
}

export const useAppStore = defineStore("app", {
  state: (): APP => ({
    reloadFlag: true,
    isdrawerMini: false,
  }),

  getters: {},

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

    async setDrawerMini(mini: boolean) {
      this.isdrawerMini = mini;
    },
  },
});
