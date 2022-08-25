import { boot } from "quasar/wrappers";
import { useRouterStore } from "src/stores/permission";
import { useUserStore } from "src/stores/user";
import constantRoutes from "src/router/constantRoutes";
import { SessionStorage } from "quasar";
import { deepClone } from "src/utils/index";
import { asyncRoutesChildren, asyncRootRoute } from "src/router/routes";
import constructionRouters from "src/router/utils/permissionUtils";
import { RouteRecordRaw } from "vue-router";
import { useMyApi } from "src/composables/myApi"


export default boot(async ({ router }) => {
  const routerStore = useRouterStore();
  const userStore = useUserStore();
  const api = useMyApi()

  router.beforeEach(async (to, from, next) => {
    // Simulate obtaining token
    const token = userStore.getAccessToken || SessionStorage.getItem("access_token");
    // There is a token indicating that you have logged in
    if (token) {
      //You cannot access the login interface after logging in
      if (to.path === "/login") {
        next({ path: "/" });
      }
      // There is user authority, and the route is not empty, then let go
      if (
        userStore.getUserRole.length > 0 &&
        routerStore.getPermissionRoutes.length
      ) {
        next();
      } else {
        if (userStore.getUserRole.length <= 0) {
          const { data } = await api("/status/200")

          let role = ["user"]
          if (token === "admin" || token === "super") {
            role = [token]
          }
          userStore.setUserInfo(
            {
              username: token as string,
              accessToken: token as string,
              role
            }
          );
        }
        // And set the corresponding route according to the permissions
        const accessRoutes = deepClone(asyncRoutesChildren);
        asyncRootRoute[0].children = constructionRouters(accessRoutes);
        routerStore.setRoutes(asyncRootRoute);
        // If you are prompted that addRoutes is deprecated, use the spread operator to complete the operation
        for (let item of asyncRootRoute) {
          router.addRoute(item as RouteRecordRaw);
        }
        // If addRoutes is not completed, the guard will execute it again
        next({ ...to, replace: true });
      }
    } else {
      // go to a route that does not require authorization
      if (
        constantRoutes.some((item) => {
          return item.path === to.path;
        })
      ) {
        next();
      } else {
        next({ path: "/login" });
      }
    }
  });
});
