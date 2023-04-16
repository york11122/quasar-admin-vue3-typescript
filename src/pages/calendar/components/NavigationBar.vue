<template>
  <div class="row justify-left">
    <div class="q-pa-md q-gutter-sm row">
      <q-btn no-caps flat class="button" style="margin: 2px;" @click="$emit('today')">
        Today
      </q-btn>
      <q-btn no-caps flat class="button" style="margin: 2px;" @click="$emit('prev')">
        &lt; Prev
      </q-btn>
      <q-btn no-caps flat class="button" style="margin: 2px;" @click="$emit('next')">
        Next &gt;
      </q-btn>
    </div>
  </div>
</template>
