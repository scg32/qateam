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
        <q-item clickable to="/administration">
          <q-item-section>
            Administration
          </q-item-section>
        </q-item>
        
        <q-item clickable to="/profile">
          <q-item-section>
            Profile
          </q-item-section>
        </q-item>
        <q-item clickable to="/test">
          <q-item-section>
            Test
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Nagłówek -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Testing team
        </q-toolbar-title>
        <q-btn flat round icon="menu" @click="toggleDrawer" />
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
