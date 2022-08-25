import { defineStore } from "pinia";
import { SessionStorage } from "quasar";
import { useTagViewStore } from "./tagView"

interface User {
  username: string;
  role: string[];
  accessToken: string | null;
}

export const useUserStore = defineStore("user", {
  state: (): User => ({
    username: "",
    role: [],
    accessToken: null
  }),

  getters: {
    getUserName(state) {
      return state.username;
    },
    getUserRole(state) {
      return state.role;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
    getFirstCharacterOfUserName(state) {
      return state.username ? state.username.charAt(0).toUpperCase() : "";
    },
  },

  actions: {
    setLoginToken(accessToken: string) {
      this.accessToken = accessToken;
      SessionStorage.set("access_token", accessToken);
    },
    setUserInfo(user: User) {
      this.username = user.username;
      this.role = user.role;
      this.accessToken = user.accessToken
    },
    setLogout() {
      this.username = "";
      this.role = [];
      this.accessToken = null;
      SessionStorage.remove("access_token");
      SessionStorage.remove("user");
      SessionStorage.clear();

      const tagViewStore = useTagViewStore()
      tagViewStore.removeAllTagView()
    },
  },
});
