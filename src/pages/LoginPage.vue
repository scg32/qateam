<!-- src/views/Login.vue -->
<template>
  <q-page class="flex flex-center">
    <q-card style="min-width: 350px; max-width: 500px">
      <q-card-section>
        <div class="text-h6 text-center">Login</div>
      </q-card-section>

      <q-card-section>
        <!-- <q-img
          src="https://picsum.photos/500/300"
          :ratio="1"
        /> -->
        <q-form @submit="login">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            rounded filled
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
          <q-btn label="Log In" type="submit" color="primary" class="full-width" glossy fab />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { loginUser, registerUser, fetchUsers } from '@/helpers/supabase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Definicja reaktywnych zmiennych
const email = ref('');
const password = ref('');

const router = useRouter();

// Funkcja logowania
const login = async () => {
  console.log('Logging in with', email.value, password.value);
  const response = await loginUser(email.value, password.value);
  if (!response) {
    console.error("Login error:", response);
  } else {
    console.log("Logged in user:", response);
    router.push('/'); // Przekierowanie po udanym logowaniu
  }
};
</script>

<style scoped>
.q-page {
  background-color: #f7f7f7;
}
</style>