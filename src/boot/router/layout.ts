import { boot } from "quasar/wrappers";
import { useTagViewStore } from "src/stores/tagView";
import { useBreadcrumbsStore } from "src/stores/breadcrumbs";
import { useKeepAliveStore } from "src/stores/keep-alive";
import { SessionStorage } from "quasar";
import { RouteLocationNormalized } from "vue-router";
import constantRoutes from "src/router/constantRoutes";
import LoadingBar from "src/components/LoadingBar/LoadingBar";



export default boot(async ({ router }) => {
  const tagViewStore = useTagViewStore();
  const breadCrumbsStore = useBreadcrumbsStore();
  const keepAliveStore = useKeepAliveStore();
  router.beforeEach((to, from) => {
    LoadingBar.stop();
    LoadingBar.start();

    if (to.name != null) {
      // is a public route
      for (let i = 0; i < constantRoutes.length; i++) {
        if (constantRoutes[i].path === to.path) {
          return;
        }
      }

      const tagViewOnSessionStorage = JSON.parse(
        SessionStorage.getItem("tagView") ?? "[]"
      );

      if (
        tagViewStore.getTagView.length === 0 &&
        tagViewOnSessionStorage.length !== 0
      ) {
        tagViewStore.setTagView(tagViewOnSessionStorage);
        keepAliveStore.setKeepAliveList(tagViewOnSessionStorage);
      } else if (from.fullPath !== to.fullPath) {
        tagViewStore.addTagView(to);
      }
      breadCrumbsStore.setBreadcurmbs(to.matched, to.query);
      handleKeepAlive(to);
    }
  });

  router.afterEach(() => {
    LoadingBar.stop();
  });
});

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
