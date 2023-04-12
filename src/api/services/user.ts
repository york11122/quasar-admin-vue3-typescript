import { UseFetchOptions } from "@vueuse/core";
import { useMyApi } from "src/composables/myApi";

export const useUserAPI = () => {
  const me = (options: UseFetchOptions = {}) => {
    return useMyApi("/data/mock/me.json", options).json();
  };

  const login = (
    payload: { username: string; password: string },
    options: UseFetchOptions = {}
  ) => {
    return useMyApi("/data/mock/login.json", options).json();
  };

  return { me, login };
};
