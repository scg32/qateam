<!-- src/views/NotFound.vue -->
<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h5">Page Not Found (404)</div>
      </q-card-section>
      <q-card-section>
        <q-btn label="Go Back to Home" to="/" color="primary" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
.q-page {
  background-color: #f7f7f7;
}
</style>