<template>
    <div class="q-pa-md fit">
        <q-table flat bordered virtual-scroll class="fit sticky-header-table table-header-color" :rows="rows"
            :columns="columns" row-key="name" v-model:pagination="pagination">
            <template v-slot:bottom>
                <q-space />
                <q-pagination v-model="pagination.page" input :max="pagesNumber" />
            </template>
        </q-table>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue"
defineOptions({ name: "FitTable" })

const pagination = ref({
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 500
})

const pagesNumber = computed(() => {
    return Math.ceil(rows.value.length / pagination.value.rowsPerPage)
})

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
for (let i = 0; i < 1000; i++) {
    rows.value.push({
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
    })
}

</script>


