import { createFetch } from "@vueuse/core";
import { SessionStorage, Notify, QNotifyCreateOptions } from "quasar";


export const useFetch = createFetch({
  baseUrl: "",
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
      const defaultNotify: string | QNotifyCreateOptions = {
        message: "unknow error",
        icon: "warning",
        color: "warning",
        position: "top",
        timeout: 1500,
      };
      if (
        error.code === "ECONNABORTED" ||
        error.message.indexOf("timeout") !== -1 ||
        error.message === "Network Error"
      ) {
        defaultNotify.message = "網路異常";
        Notify.create(defaultNotify);
      }
      switch (response?.status) {
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
