import { useUserStore } from "src/stores/user"

export const usePermission = () => {
    const userStore = useUserStore()

    function hasPermission(permission: string[]) {
        const { getUserRole } = userStore;

        let has = getUserRole.includes('super');
        if (!has) {
            has = getUserRole.some(role => permission.includes(role))
        }
        return has;
    }

    return {
        hasPermission
    };
}