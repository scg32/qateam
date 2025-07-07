<!-- src/layouts/MainLayout.vue -->
<template>
  <q-layout view="lHh Lpr fFf">
    <!-- Drawer (Menu boczne) -->
    <q-drawer v-model="drawerOpen" show-if-above side="left" bordered>
      <q-list>
        <q-item clickable to="/" exact>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <!-- Główne menu: Appointments z podmenu -->
    <q-expansion-item
      icon="event"
      label="Appointments"
      expand-separator
      default-opened
    >
      <q-item clickable to="/appointments/add">
        <q-item-section>Add a new appointment</q-item-section>
      </q-item>
      </q-expansion-item>
        <q-item clickable to="/patients">
          <q-item-section>
            Patients
          </q-item-section>
        </q-item>
        <q-item clickable to="/users">

          <q-item-section>
            Users
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Nagłówek -->
     
    <q-header elevated>
      <q-toolbar>
      <q-btn flat round icon="menu" @click="toggleDrawer" />
        <q-toolbar-title>
          QA Clinic
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Zawartość -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="text-center">
      <q-btn label="Have a nice day!" />
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
