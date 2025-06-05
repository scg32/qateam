// src/router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

// Importuj komponenty
import LoginPage from '../pages/LoginPage.vue';
import Home from '../pages/HomePage.vue';
import MainLayout from '../layouts/MainLayout.vue'; 
import LoginLayout from '../layouts/LoginLayout.vue'; 
import NotFound from '../pages/NotFound.vue'; // Używamy MainLayout dla Home i About

// Zdefiniuj trasy
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { layout: LoginLayout },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: MainLayout },  // Przypisujemy layout dla strony Home
  },
  // Dodaj trasę dla 404 Not Found
  {
    path: '/:pathMatch(.*)*',  // Pasuje do wszystkich nieznanych tras
    name: 'NotFound',
    component: NotFound,
    meta: { layout: MainLayout },  // Przypisujemy layout dla strony NotFound
  },
];

// Tworzymy router z historią przeglądarki
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
