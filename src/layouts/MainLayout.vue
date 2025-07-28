<!-- src/layouts/MainLayout.vue -->
<template>
  <q-layout view="lHh Lpr fFf">
    <!-- Drawer (Menu boczne) -->
    <q-drawer v-model="drawerOpen" show-if-above side="left" bordered>
      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home </q-item-section>
        </q-item>

        <!-- Główne menu: Appointments z podmenu -->
        <q-expansion-item
          icon="event"
          label="Appointments"
          expand-separator
          default-closed
        >
          <q-item clickable to="/appointments/list">
            <q-item-section>Appointments list</q-item-section>
          </q-item>
          <q-item clickable to="/appointments/add">
            <q-item-section>Add a new appointment</q-item-section>
          </q-item>
        </q-expansion-item>

        <!-- Główne menu: Patients z podmenu -->
        <q-expansion-item
          icon="group"
          label="Patients"
          expand-separator
          default-closed
        >
          <q-item clickable to="/patients/list">
            <q-item-section>Patients list</q-item-section>
          </q-item>
          <q-item clickable to="/patients/add">
            <q-item-section>Add a new patient</q-item-section>
          </q-item>
        </q-expansion-item>
        <!-- Główne menu: Users z podmenu -->
        <q-expansion-item
          icon="person"
          label="Users"
          expand-separator
          default-closed
        >
          <q-item clickable to="/users/list">
            <q-item-section>Users list</q-item-section>
          </q-item>
          <q-item clickable to="/users/add">
            <q-item-section>Add a new user</q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <!-- Nagłówek -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleDrawer" />
        <q-toolbar-title> Testing team </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Zawartość -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="text-center">
      <q-btn label="Footer Content" />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Stan otwarcia i zamknięcia menu bocznego (drawer)
const drawerOpen = ref(true);

// Funkcja do przełączania stanu drawer
const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
};
</script>

<style scoped>
/* Stylowanie layoutu, jeśli potrzebujesz */
</style>
