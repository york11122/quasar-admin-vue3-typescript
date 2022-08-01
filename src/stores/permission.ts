import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { deepClone } from "src/utils/index";
import router from "src/router/routes";
import constructionRouters from "src/router/utils/permissionUtils";

export const useRouterStore = defineStore("routes", {
  state: () => ({
    permissionRoutes: [] as RouteRecordRaw[],
  }),

  getters: {
    getPermissionRoutes(state): RouteRecordRaw[] {
      return state.permissionRoutes;
    },
  },

  actions: {
    setRoutes() {
      const accessRoutes = deepClone(router);
      accessRoutes[0].children = constructionRouters(accessRoutes[0].children);
      this.permissionRoutes = accessRoutes;
    },
  },
});
