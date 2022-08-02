import { defineStore } from "pinia";
import { SessionStorage } from "quasar";

interface User {
  username?: string;
  role?: string;
}

export const useUserStore = defineStore("user", {
  state: (): User => ({
    username: "",
    role: "",
  }),

  getters: {
    getUserName(state) {
      return state.username;
    },

    getUserRole(state) {
      return state.role;
    },
  },

  actions: {
    login() {
      //fetch backend login
      const accessToken = "token";
      SessionStorage.set("access_token", accessToken);
      this.fetchUserInfo(accessToken);
    },
    fetchUserInfo(accessToken: string) {
      //fetch backend userInfo
      const user: User = { username: "york", role: "admin" };
      this.username = user.username;
      this.role = user.role;
    },
    logout() {
      this.username = "";
      this.role = "";
      SessionStorage.remove("access_token");
      SessionStorage.remove("user");
      SessionStorage.clear();
    },
  },
});
