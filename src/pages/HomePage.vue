<!-- src/views/HomePage.vue -->
<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h5">Hello world!</div>
      </q-card-section>

      <q-card-section>
        <div>
          <q-btn label="Go to Login" to="/login" color="primary" />
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
import { fetchUsers, fetchRoles, fetchUserById, fetchCurrentUser, updateUserById } from '../helpers/supabase.ts';
import { onMounted } from 'vue'

onMounted(async () => {
  const users = await fetchUsers()
  const roles = await fetchRoles()
  const user = await fetchUserById(1)
  console.log('User keys:', Object.keys(user));
  const currentUser = await fetchCurrentUser()
  const updatedUser = await updateUserById(user.id, { email: "enewemail@example.com" })

  console.log('Użytkownicy:', users)
  console.log('Role:', roles)
  console.log('Użytkownik:', user)
  console.log('Bieżący użytkownik:', currentUser)
  console.log('Zaktualizowany użytkownik:', updatedUser)
})

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
