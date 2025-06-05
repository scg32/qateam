<!-- src/views/HomePage.vue -->
<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h5">Welcome to the Home Page</div>
      </q-card-section>

      <q-card-section>
        <div>
          <q-btn label="Go to About" to="/about" color="primary" />
          <q-btn label="Go to Profile" to="/profile" color="secondary" class="q-ml-sm" />
        </div>
      </q-card-section>
    </q-card>

    <q-footer class="text-center">
      <q-btn label="Footer Content" color="grey-4" text-color="white" />
    </q-footer>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
.my-card {
  max-width: 500px;
  margin: auto;
}

q-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
}
</style>
