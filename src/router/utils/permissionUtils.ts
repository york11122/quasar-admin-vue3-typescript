import { RouteRecordRaw } from "vue-router";

export default function constructionRouters(router: RouteRecordRaw[]) {
  let temp = router.filter((item) => {
    // if no roles is setting, everyone can access
    if (!item.meta?.roles || item.meta.roles.length === 0) return true;
    return item.meta.roles.indexOf("store.getters.getRole") !== -1;
  });

  // construct router with user permission
  for (const i in temp) {
    if (temp[i].children) {
      temp[i].children = constructionRouters(temp[i].children ?? []);
    }
  }
  return temp;
}
