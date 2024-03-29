import { defineStore } from "pinia";
import { SessionStorage } from "quasar";
import { useTagViewStore } from "./tagView";
import { Router as router } from "src/router/index";
interface User {
  username: string;
  roles: string[];
}

export const useUserStore = defineStore("user", {
  state: (): User => ({
    username: "",
    roles: [],
  }),

  getters: {
    getUserName(state) {
      return state.username;
    },
    getUserRoles(state) {
      return state.roles;
    },
    getFirstCharacterOfUserName(state) {
      return state.username ? state.username.charAt(0).toUpperCase() : "";
    },
  },

  actions: {
    setLoginToken(accessToken: string) {
      SessionStorage.set("access_token", accessToken);
    },
    setUserInfo(user: User) {
      this.username = user.username;
      this.roles = user.roles;
    },
    setUserRoles(roles: string[]) {
      this.roles = roles;
    },
    setLogout() {
      this.username = "";
      this.roles = [];
      SessionStorage.remove("access_token");
      SessionStorage.remove("user");
      SessionStorage.clear();

      const tagViewStore = useTagViewStore();
      tagViewStore.removeAllTagView();

      router.push({ name: "Login" });
    },
  },
});
