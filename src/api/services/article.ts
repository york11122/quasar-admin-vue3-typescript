import { UseFetchOptions } from "@vueuse/core";
import { useMyApi } from "src/composables/myApi";
import { ArticleStatus } from "src/types/enum";
import { computed, Ref } from "vue";

export const useArticleAPI = () => {
  const getArticles = (
    query: { limit: number; page: number },
    options: UseFetchOptions = {}
  ) => {
    const url = computed(
      () => `/data/mock/articles.json?limit=${query.limit}&page=${query.page}`
    );
    return useMyApi(url, options).json();
  };

  return { getArticles };
};
