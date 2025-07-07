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
import { fetchUsers, fetchRoles, fetchUserById, fetchCurrentUser, updateUserById, insertUser, deleteUser } from '../helpers/supabase.ts';
import { onMounted } from 'vue'
import type { IUser } from '@/interfaces/IUser';


const mockUser: IUser = {
  role_id: 1,
  username: 'testuser',
  first_name: 'Test',
  last_name: 'User',
  password: '123456',
  email: 'test@example.com',
  phone_number: '123456789',
  is_active: true,
  is_superadmin: false,
  user_id: '13232'
};

onMounted(async () => {
  const users = await fetchUsers();
  const roles = await fetchRoles();
  const user = await fetchUserById(1);
  // console.log('User keys:', Object.keys(user));
  const currentUser = await fetchCurrentUser();
  // const updatedUser = await updateUserById(user.id, { email: "ewenewemail@example.com" });
  // const insertedUser = await insertUser({ role_id: 1, username: "johndoe", first_name: "John", last_name: "Doe",  password: "password" , is_active: true, is_superadmin: true });
  // const insertedUser = await insertUser(mockUser);
  const deletedUser = await deleteUser(12);

  console.log('Użytkownicy:', users)
  console.log('Role:', roles)
  console.log('Użytkownik:', user)
  console.log('Bieżący użytkownik:', currentUser)
  // console.log('Zaktualizowany użytkownik:', updatedUser)
  // console.log('Nowo dodany użytkownik:', insertedUser)
  console.log('Usunięty użytkownik:', deletedUser)
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
