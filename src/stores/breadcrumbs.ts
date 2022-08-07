import { defineStore } from "pinia";
import { BreadCrumbsData } from "src/types/index";
import { RouteRecordNormalized, LocationQuery } from "vue-router";
import { deepClone, getFirst } from "src/utils/index";
export const useBreadcrumbsStore = defineStore("breadCrumbs", {
  state: () => ({
    breadcrumbs: [] as BreadCrumbsData[],
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
        temp.push(deepClone(matched[i].meta));
      }

      const last = temp.length - 1
      if (Object.keys(query).length) {
        temp[last].title += '：' + getFirst(query)
      }

      this.breadcrumbs = temp;
    },
  },
});
