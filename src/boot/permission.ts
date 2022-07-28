import { boot } from "quasar/wrappers";
import { useRouterStore } from "src/stores/permission";
import { useTagViewStore } from "src/stores/tagView";
import { useBreadcrumbsStore } from "src/stores/breadcrumbs";
import { useKeepAliveStore } from "src/stores/keep-alive";
import { SessionStorage } from "quasar";
import { RouteLocationNormalized } from "vue-router";
import LoadingBar from "src/components/LoadingBar/LoadingBar";
import constantRoutes from "src/router/constantRoutes";

const routerStore = useRouterStore();
const tagViewStore = useTagViewStore();
const breadCrumbsStore = useBreadcrumbsStore();
const keepAliveStore = useKeepAliveStore();

export default boot(async ({ router }) => {
  router.beforeEach((to, from, next) => {
    LoadingBar.stop();
    LoadingBar.start();
    handleTagViewAndBreadcrumbsAndKeepAlive(to, from);
    // Simulate obtaining token
    const token = "true"; //sessionStorage.getItem('access_token')
    // const userRole = sessionStorage.getItem('user_role')
    // There is a token indicating that you have logged in
    if (token) {
      // You cannot access the login interface after logging in
      if (to.path === "/login") {
        next({ path: "/" });
      }
      // There is user authority, and the route is not empty, then let go
      if (routerStore.getPermissionRoutes.length) {
        next();
      } else {
        // Simulate when user permissions do not exist, obtain user permissions
        // const userRole = sessionStorage.getItem('user_role')
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
        next({ path: "/logon" });
      }
    }
  });

  router.afterEach(() => {
    LoadingBar.stop();
  });
});

function handleTagViewAndBreadcrumbsAndKeepAlive(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  if (to.name != null) {
    document.title = to.meta.title;
    for (let i = 0; i < constantRoutes.length; i++) {
      if (constantRoutes[i].path === to.path) {
        return;
      }
    }

    let tagViewOnSessionStorage = [];
    if (!SessionStorage.getItem("tagView")) {
      SessionStorage.set("tagView", "[]");
    } else {
      tagViewOnSessionStorage = JSON.parse(
        SessionStorage.getItem("tagView") ?? "[]"
      );
    }
    if (
      tagViewStore.getTagView.length === 0 &&
      tagViewOnSessionStorage.length !== 0
    ) {
      tagViewStore.setTagView(tagViewOnSessionStorage);
      keepAliveStore.setKeepAliveList(tagViewOnSessionStorage);
    } else if (from.fullPath !== to.fullPath) {
      tagViewStore.addTagView(to);
    }
    breadCrumbsStore.setBreadcurmbs(to.matched);
    handleKeepAlive(to);
  }
}

/**
 * Handle redundant layout: router-view and keep the current component under the first layer index <router-view>
 * This method cannot filter the on-demand loading <layout> used for nested routing
 * @param to
 */
function handleKeepAlive(to: RouteLocationNormalized) {
  if (to.matched && to.matched.length > 2) {
    for (let i = 0; i < to.matched.length; i++) {
      const element = to.matched[i];
      if (element.components?.default.name === "Layout") {
        to.matched.splice(i, 1);
        handleKeepAlive(to);
      }
    }
  }
}
