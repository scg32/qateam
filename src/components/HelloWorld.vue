<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>My App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <!-- <router-view /> -->
       <h1>{{ msg }}</h1>

  <q-card>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </q-card>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    </q-page-container>

    <q-footer class="text-center">
      <div class="text-subtitle2">Footer Content</div>
    </q-footer>
  </q-layout>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
