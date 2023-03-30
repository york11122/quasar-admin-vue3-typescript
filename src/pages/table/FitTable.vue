<template>
  <div class="q-pa-sm fit" v-if="$q.screen.gt.xs">
    <q-table
      class="fit sticky-header-table"
      selection="multiple"
      v-model:selected="selected"
      :dense="$q.screen.lt.md"
      separator="cell"
      flat
      bordered
      :rows="articles"
      :filter="filter"
      :columns="columns"
      row-key="name"
      v-model:pagination="pagination"
    >
      <template v-slot:top>
        <q-btn color="primary" label="Add row" />
        <q-btn class="q-ml-sm" color="primary" label="Remove row" />
        <q-space />
        <q-input dense outlined debounce="300" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:bottom>
        <div class="full-width row justify-center">
          <q-pagination v-model="pagination.page" input :max="pagesNumber" />
        </div>
      </template>
    </q-table>
  </div>
  <base-content v-else>
    <q-table
      grid
      flat
      bordered
      :rows="articles"
      :columns="columns"
      :loading="isFetching"
      row-key="name"
      v-model:pagination="pagination"
    />
  </base-content>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import BaseContent from "src/components/BaseContent/BaseContent.vue";
import { useMyApi } from "src/composables/myApi";

defineOptions({ name: "FitTable" });

const articles = ref<any[]>([]);
const total = ref<number>(0);
const api = useMyApi();
const { data, isFetching, onFetchResponse, execute } = api<any>(
  "/blog/article?limit=5&page=1",
  {
    immediate: false,
  }
)
  .get()
  .json();

onMounted(() => {
  execute();
});

onFetchResponse((res) => {
  articles.value = data.value.items || [];
  total.value = data.value.total || 0;
});

const pagination = ref({
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 5,
});

const pagesNumber = computed(() => {
  return Math.ceil(total.value / pagination.value.rowsPerPage);
});

const filter = ref<string>("");
const selected = ref([]);
const columns = ref<any>([
  {
    name: "title",
    align: "left",
    label: "title",
    field: "title",
  },
  {
    name: "content",
    align: "center",
    label: "content",
    field: "content",
  },
  {
    name: "description",
    align: "center",
    label: "description",
    field: "description",
  },
  {
    name: "thumbnail",
    align: "center",
    label: "thumbnail",
    field: "thumbnail",
  },
  //   {
  //     name: "tags",
  //     align: "center",
  //     label: "tags",
  //     field: "tags",
  //   },
  {
    name: "createdAt",
    align: "center",
    label: "createdAt",
    field: "createdAt",
  },
]);
</script>
