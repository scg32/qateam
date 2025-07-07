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

      <q-card-section>
         <q-form @submit="register">
          <q-btn label="Register" type="submit" color="primary" class="full-width" glossy fab/>
        </q-form>
      </q-card-section>
    </q-card>

    <q-footer class="text-center">
      <q-btn label="Footer Content" color="grey-4" text-color="white" />
    </q-footer>
  </q-page>
</template>

<script setup lang="ts">
import { fetchUsers, fetchRoles, fetchUserById, fetchCurrentUser, fetchCurrentUserInfo, fetchCurrentUserRoles, fetchUserByUserId, updateUserById, insertUser, deleteUser, registerUser } from '../helpers/supabase.ts';
import { onMounted } from 'vue'
import type { IUser } from '@/interfaces/IUser';


const mockUser: IUser = {
  username: 'testuser',
  first_name: 'Test',
  last_name: 'User',
  email: 'testUser@example.com',
  phone_number: '123456789',
  is_active: true,
  is_superadmin: false,
  user_id: '',
  user_role: 'authenticated',
  role_ids: [3,2,1]
};

const register = async () => {
  console.log('Registering user...');
  const registeredUser = await registerUser(mockUser.email, "Aptvision123");

  if (registeredUser) {
    console.log('User registered successfully in auth:', registeredUser);
    const dataUser = registeredUser.user;

    const existing = await fetchUserByUserId(dataUser?.id!);
    if (!existing) {
      console.log('Inserting into database...');
      const insertedUser = await insertUser({
        username: dataUser?.email?.split('@')[0],
        first_name: mockUser.first_name,
        last_name: mockUser.last_name,
        email: dataUser?.email!,
        phone_number: mockUser.phone_number,
        is_active: mockUser.is_active,
        is_superadmin: mockUser.is_superadmin,
        user_id: dataUser?.id!,
        user_role: dataUser?.role ?? 'authenticated',
        role_ids: mockUser.role_ids
      });
    } else {
      console.warn('User already exists in usr_user');
    }
  }
}

onMounted(async () => {
  // const users = await fetchUsers();
  // const roles = await fetchRoles();
  // const user = await fetchUserById(1);
  // console.log('User keys:', Object.keys(user));
  const currentUser = await fetchCurrentUser();
  const currentUserInfo = await fetchCurrentUserInfo();
  const currentUserRoles = await fetchCurrentUserRoles();
  // const updatedUser = await updateUserById(user.id, { email: "ewenewemail@example.com" });
  // const insertedUser = await insertUser({ username: "johndoe", first_name: "John", last_name: "Doe", email: "johndoe@example.com", is_active: true, is_superadmin: true, user_id: "12345", user_role: "authenticated", role_ids: [1, 2, 3] });
  // const insertedUser = await insertUser(mockUser);
  // const deletedUser = await deleteUser(12);

  // console.log('Użytkownicy:', users)
  // console.log('Role:', roles)
  // console.log('Użytkownik:', user)
  console.log('Bieżący użytkownik:', currentUser)
  console.log('Bieżące informacje o użytkowniku:', currentUserInfo)
  console.log('Bieżące role użytkownika:', currentUserRoles)
  // console.log('Zaktualizowany użytkownik:', updatedUser)
  // console.log('Nowo dodany użytkownik:', insertedUser)
  // console.log('Usunięty użytkownik:', deletedUser)
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
