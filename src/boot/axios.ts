import { boot } from "quasar/wrappers";
import axios, { AxiosInstance } from "axios";
import { SessionStorage, Notify, QNotifyCreateOptions } from "quasar"

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: "" });

axios.interceptors.request.use(
  config => {
    const token = SessionStorage.getItem('access_token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const defaultNotify: string | QNotifyCreateOptions = {
      message: 'unknow error',
      icon: 'warning',
      color: 'warning',
      position: 'top',
      timeout: 1500
    }
    if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') !== -1 || error.message === 'Network Error') {
      defaultNotify.message = '網路異常'
      Notify.create(defaultNotify)
      return Promise.reject(error)
    }
    switch (error.response.status) {
      case 403:
        defaultNotify.message = '(403)'
        Notify.create(defaultNotify)
        break
      case 404:
        defaultNotify.message = '(404)'
        Notify.create(defaultNotify)
        break
      case 408:
        defaultNotify.message = '(408)'
        Notify.create(defaultNotify)
        break
      case 500:
        defaultNotify.message = '(500)'
        Notify.create(defaultNotify)
        break
      case 501:
        defaultNotify.message = '(501)'
        Notify.create(defaultNotify)
        break
      case 502:
        defaultNotify.message = '(502)'
        Notify.create(defaultNotify)
        break
      case 503:
        defaultNotify.message = '(503)'
        Notify.create(defaultNotify)
        break
      case 504:
        defaultNotify.message = '(504)'
        Notify.create(defaultNotify)
        break
      case 505:
        defaultNotify.message = 'H(505)'
        Notify.create(defaultNotify)
        break
      default:
        Notify.create(defaultNotify)
        break
    }
    return Promise.reject(error)
  }
)

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
