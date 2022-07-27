import { defineStore } from "pinia";
import { RouteData } from "src/types/index";
import { RouteRecordName } from "vue-router";

export const useKeepAliveStore = defineStore("keepAlive", {
  state: () => ({
    keepAliveList: [] as string[],
  }),

  getters: {
    getKeepAliveList(state) {
      return state.keepAliveList;
    },
  },

  actions: {
    setKeepAliveList(payload: RouteData[]) {
      this.keepAliveList = [];
      for (let i = 0; i < payload.length; i++) {
        if (payload[i].keepAlive) {
          this.keepAliveList.push(payload[i].name as string);
        }
      }
      // If you need to cache the homepage, as shown below,
      // push the corresponding routing component name at the end of the method.
      // state.keepAliveList.push('home')
      return this.keepAliveList;
    },
  },
});
