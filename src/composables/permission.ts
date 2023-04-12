import { useUserStore } from "src/stores/user";

export const usePermission = () => {
  const userStore = useUserStore();

  function hasPermission(permission: string[]) {
    const { getUserRoles } = userStore;

    if (getUserRoles) {
      let has = getUserRoles.includes("super");
      if (!has) {
        has = getUserRoles.some((role) => permission.includes(role));
      }
      return has;
    }
    return false;
  }

  return {
    hasPermission,
  };
};
