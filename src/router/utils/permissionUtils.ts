import { useUserStore } from "src/stores/user";
import { Route } from "src/types/index"


export default function constructionRouters(router: Route[]) {
  const userStore = useUserStore();
  let temp = router.filter((item) => {
    // if no roles is setting, everyone can access
    if (!item.meta?.roles || item.meta.roles.length === 0) return true;
   // return item.meta.roles.indexOf(userStore.getUserRole as string) !== -1;
   return userStore.getUserRole.some(role => item.meta.roles.includes(role))
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
