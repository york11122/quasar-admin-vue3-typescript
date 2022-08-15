<template>
    <div class="row justify-center">
        <div class="q-pa-md q-gutter-sm row">
            <q-btn no-caps class="button" style="margin: 2px;" @click="$emit('today')" flat>
                Today
            </q-btn>
            <q-btn no-caps class="button" style="margin: 2px;" @click="$emit('prev')" flat>
                &lt; Prev
            </q-btn>
            <q-btn no-caps class="button" style="margin: 2px;" @click="$emit('next')" flat>
                Next &gt;
            </q-btn>
        </div>
    </div>
</template>
