import { defineStore } from "pinia";
import { SessionStorage } from "quasar";
import { Router as router } from "src/router/index";
import { useMyApi } from "src/composables/myApi"
import { useFetch } from "src/composables/fetch"
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
    getFirstCharacterOfUserName(state) {
      return state.username ? state.username.charAt(0).toUpperCase() : "";
    },
  },

  actions: {
    login(loginObj: {
      username: string;
      password: string;
    }) {
      //fetch backend login
      const api = useMyApi()

      const response = api("/status/200", { immediate: false }).post(loginObj)

      response.onFetchResponse(async (res) => {
        const accessToken = "token";
        SessionStorage.set("access_token", accessToken);
        await this.fetchUserInfo(response.statusCode.toString());
        // router.push("/")
      })

      return response
    },
    async fetchUserInfo(accessToken: string): Promise<void> {
      const api = useMyApi()
      const { data } = await api("/get")
      console.log("ggg")
      const user: User = { username: accessToken, role: "admin" };
      this.username = user.username;
      this.role = user.role;
    },
    logout() {
      this.username = "";
      this.role = "";
      SessionStorage.remove("access_token");
      SessionStorage.remove("user");
      SessionStorage.clear();
      router.push({ name: "Login" })
    },
  },
});
