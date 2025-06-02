// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';  // Importowanie stylów Quasar

createApp(App)
  .use(Quasar)  // Dodanie Quasar jako plugin
  .mount('#app');
