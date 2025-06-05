<!-- src/App.vue -->
<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// Pobieramy aktualną trasę
const route = useRoute();

// Dynamically set layout based on route meta
const layout = computed(() => route.meta.layout || 'default-layout');
</script>
