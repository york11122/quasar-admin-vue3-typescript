import { defineStore } from "pinia";
import { nextTick } from "vue";

interface APP {
  reloadFlag: boolean;
  isDrawerMini: boolean;
}

export const useAppStore = defineStore("app", {
  state: (): APP => ({
    reloadFlag: true,
    isDrawerMini: false,
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

    setDrawerMini(mini: boolean) {
      this.isDrawerMini = mini;
    },


  },
});
