import { useUserStore } from "src/stores/user";
import { Route } from "src/types/index"
import { usePermission } from "src/composables/permission"

export default function constructionRouters(router: Route[]) {
  const userStore = useUserStore();
  const { hasPermission } = usePermission()
  let temp = router.filter((item) => {
    // if no roles is setting, everyone can access
    if (!item.meta?.roles || item.meta.roles.length === 0) return true;
    // return item.meta.roles.indexOf(userStore.getUserRole as string) !== -1;
    return hasPermission(item.meta.roles)
  });

  // construct router with user permission
  for (const i in temp) {
    if (temp[i].children) {
      temp[i].children = constructionRouters(
        temp[i].children as Route[]
      );
    }
  }
  return temp;
}
