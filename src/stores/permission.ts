import { defineStore } from "pinia";
import { RouteRecordRaw } from "vue-router";

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
    setRoutes(routes: RouteRecordRaw[]) {
      this.permissionRoutes = routes;
    },
  },
});
