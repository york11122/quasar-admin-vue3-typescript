import { boot } from "quasar/wrappers";
import { useRouterStore } from "src/stores/permission";
import constantRoutes from "src/router/constantRoutes";

const routerStore = useRouterStore();

export default boot(async ({ router }) => {
  router.beforeEach((to, from, next) => {
    // Simulate obtaining token
    const token = sessionStorage.getItem("access_token");
    const userRole = sessionStorage.getItem("user_role");
    // There is a token indicating that you have logged in
    if (token) {
      //You cannot access the login interface after logging in
      if (to.path === "/login") {
        next({ path: "/" });
      }
      // There is user authority, and the route is not empty, then let go
      if (userRole && routerStore.getPermissionRoutes.length) {
        next();
      } else {
        // Simulate when user permissions do not exist, obtain user permissions
        const userRole = sessionStorage.getItem("user_role");
        // And set the corresponding route according to the permissions
        routerStore.setRoutes();
        // If you are prompted that addRoutes is deprecated, use the spread operator to complete the operation
        const permissionRoutes = routerStore.getPermissionRoutes;
        for (let item of permissionRoutes) {
          router.addRoute(item);
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
