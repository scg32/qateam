<!-- src/views/Login.vue -->
<template>
  <q-page class="flex flex-center">
    <q-card style="min-width: 350px; max-width: 500px">
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="login">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            outlined
            class="q-mb-md"
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            square 
            outlined
            class="q-mb-md"
          />
          <q-btn label="Log In" type="submit" color="primary" class="full-width" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Definicja reaktywnych zmiennych
const email = ref('');
const password = ref('');

// Funkcja logowania
const login = () => {
  console.log('Logging in with', email.value, password.value);
  // Możesz tutaj dodać logikę logowania np. z Supabase
};
</script>

<style scoped>
.q-page {
  background-color: #f7f7f7;
}
</style>