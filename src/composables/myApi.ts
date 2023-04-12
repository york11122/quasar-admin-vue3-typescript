import { createFetch } from "@vueuse/core";
import { SessionStorage, QNotifyCreateOptions } from "quasar";
import { useUserStore } from "src/stores/user";
import Notify from "src/components/Notify/Notify";

const useMyApi = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  options: {
    // doing some additional setting before the fetch, e.g. Authorization header adding
    async beforeFetch({ options }) {
      const token = SessionStorage.getItem("access_token");
      if (token) {
        options.headers = { Authorization: `Bearer ${token}` };
      }
      return { options };
    },

    //doing format things or other setting after retriving the response data
    afterFetch({ data, response }) {
      return { data, response };
    },
    // when error occurs
    onFetchError({ data, error, response }) {
      const userStore = useUserStore();
      const defaultNotify: string | QNotifyCreateOptions = {
        message: "unknow error",
        icon: "warning",
        color: "warning",
      };
      if (
        error.code === "ECONNABORTED" ||
        error.message.indexOf("timeout") !== -1 ||
        error.message === "Network Error"
      ) {
        defaultNotify.message = "網路異常";
        Notify.create(defaultNotify);
      }

      if (error instanceof DOMException) {
        defaultNotify.message = error.message
      }

      switch (response?.status) {
        case 400:
          defaultNotify.message = "(400)api參數異常";
          Notify.create(defaultNotify);
          break;
        case 422:
          break;
        case 401:
          defaultNotify.message = "(401)權限不足";
          userStore.setLogout();
          break;
        case 403:
          defaultNotify.message = "(403)";
          Notify.create(defaultNotify);
          break;
        case 404:
          defaultNotify.message = "(404)";
          Notify.create(defaultNotify);
          break;
        case 408:
          defaultNotify.message = "(408)";
          Notify.create(defaultNotify);
          break;
        case 500:
          defaultNotify.message = "(500)";
          Notify.create(defaultNotify);
          break;
        case 501:
          defaultNotify.message = "(501)";
          Notify.create(defaultNotify);
          break;
        case 502:
          defaultNotify.message = "(502)";
          Notify.create(defaultNotify);
          break;
        case 503:
          defaultNotify.message = "(503)";
          Notify.create(defaultNotify);
          break;
        case 504:
          defaultNotify.message = "(504)";
          Notify.create(defaultNotify);
          break;
        case 505:
          defaultNotify.message = "(505)";
          Notify.create(defaultNotify);
          break;
        default:
          Notify.create(defaultNotify);
          break;
      }
      return { data, error };
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});

export { useMyApi };
