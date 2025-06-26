// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar';
import iconSet from 'quasar/icon-set/material-icons';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import router from './router'; // Importuj router

createApp(App)
  .use(Quasar, {
    iconSet: iconSet
  })
  .use(router) // Dodaj router do aplikacji
  .mount('#app');
