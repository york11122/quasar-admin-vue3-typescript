<template>
  <base-content class="q-pa-sm">
    <q-table class="fit sticky-header-table" selection="multiple" v-model:selected="selected" :dense="$q.screen.lt.md"
      separator="cell" flat bordered :rows="rows" :filter="filter" :columns="columns" row-key="name"
      v-model:pagination="pagination">
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

  </base-content>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
import BaseContent from "src/components/BaseContent/BaseContent.vue"
import ReloadWrapper from "src/components/ReloadWrapper/ReloadWrapper.vue";
defineOptions({ name: "FitTable" })

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 100
})

const pagesNumber = computed(() => {
  return Math.ceil(rows.value.length / pagination.value.rowsPerPage)
})

const filter = ref<string>("")
const selected = ref([])
const columns = ref<any>([
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true },
  { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true }
])

const rows = ref<any>([])
for (let i = 0; i < 500; i++) {
  rows.value.push({
    name: 'Frozen Yogurt ' + i,
    calories: Math.floor(Math.random() * 100) + 1,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%'
  })
}

</script>


