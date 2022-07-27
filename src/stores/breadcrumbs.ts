import { defineStore } from "pinia";
import { BreadCrumbsData } from "src/types/index";
import { RouteRecordNormalized } from "vue-router";
import { deepClone } from "src/utils/index";
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
    setBreadcurmbs(matched: RouteRecordNormalized[]) {
      const temp = [];
      for (let i = 0; i < matched.length; i++) {
        temp.push(deepClone(matched[i].meta));
      }
      this.breadcrumbs = temp;
    },
  },
});
