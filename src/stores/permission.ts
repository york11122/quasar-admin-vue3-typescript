import { defineStore } from "pinia";
import { Route } from "src/types/index"

export const useRouterStore = defineStore("routes", {
  state: () => ({
    permissionRoutes: [] as Route[],
  }),

  getters: {
    getPermissionRoutes(state): Route[] {
      return state.permissionRoutes;
    },
  },

  actions: {
    setRoutes(routes: Route[]) {
      this.permissionRoutes = routes;
    },
  },
});
