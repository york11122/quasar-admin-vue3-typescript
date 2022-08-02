import { defineStore } from 'pinia';
import { User } from "src/types/index"
import { SessionStorage } from "quasar"
export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null
  }),

  getters: {
    getUser(state) {
      return state.user
    }
  },

  actions: {
    setUser(user: User) {
      this.user = user;
    },
    logout() {
      this.user = null
      SessionStorage.remove('access_token')
      SessionStorage.remove('user')

    }
  }
});
