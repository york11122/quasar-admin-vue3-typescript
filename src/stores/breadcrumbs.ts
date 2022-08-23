import { defineStore } from "pinia";
import { RouteData } from "src/types/index";
import { RouteRecordNormalized, LocationQuery } from "vue-router";
import { deepClone, getFirst } from "src/utils/index";
export const useBreadcrumbsStore = defineStore("breadCrumbs", {
  state: () => ({
    breadcrumbs: [] as RouteData[],
  }),

  getters: {
    getBreadCrumbs(state) {
      return state.breadcrumbs;
    },
  },

  actions: {
    setBreadcurmbs(matched: RouteRecordNormalized[], query: LocationQuery) {
      const temp = [];
      for (let i = 0; i < matched.length; i++) {

        const breadcrumb: RouteData = {
          title: matched[i].meta.title,
          name: matched[i].name,
          fullPath: matched[i].path,
          icon: matched[i].meta.icon,
          keepAlive: matched[i].meta.keepAlive,
        };

        temp.push(breadcrumb);
      }

      const last = temp.length - 1
      if (Object.keys(query).length) {
        temp[last].title += '：' + getFirst(query)
      }

      this.breadcrumbs = temp;
    },
  },
});
