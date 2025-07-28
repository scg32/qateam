// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { supabase } from "../helpers/supabase";

// Importuj komponenty
import LoginPage from "../pages/LoginPage.vue";
import Home from "../pages/HomePage.vue";
import MainLayout from "../layouts/MainLayout.vue";
import LoginLayout from "../layouts/LoginLayout.vue";
import NotFound from "../pages/NotFound.vue"; // Używamy MainLayout dla Home i About
import UserPage from "../pages/UserPage.vue";
import Administration from "../pages/Administration.vue";
import TableUser from "@/pages/TableUser.vue";
import AddPatient from "../pages/AddPatient.vue"

// Zdefiniuj trasy
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: { layout: LoginLayout },
  },
  {
    path: "/users/add",
    name: "User",
    component: UserPage,
    meta: { layout: MainLayout },
  },
  {
    path: "/patients/add",
    name: "Patient",
    component: AddPatient,
    meta: { layout: MainLayout },
  },
  {
    path: "/administration",
    name: "Administration",
    component: Administration,
    meta: { layout: MainLayout }, // Przypisujemy layout dla strony Home
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { layout: MainLayout }, // Przypisujemy layout dla strony Home
  },
  // Dodaj trasę dla 404 Not Found
  {
    path: "/:pathMatch(.*)*", // Pasuje do wszystkich nieznanych tras
    name: "NotFound",
    component: NotFound,
    meta: { layout: MainLayout }, // Przypisujemy layout dla strony NotFound
  },
  {
    path: "/users/list",
    name: "Users list",
    component: TableUser,
    meta: { layout: MainLayout },
  },
];

// Tworzymy router z historią przeglądarki
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

// Router guard - sprawdza token w localStorage i sesję Supabase
router.beforeEach(async (to, from, next) => {
  try {
    // Sprawdź obecną sesję Supabase
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error("Błąd podczas sprawdzania sesji:", error);
    }

    const isAuthenticated = !!session;
    const isLoginPage = to.path === "/login";

    // Jeśli użytkownik jest zalogowany i próbuje wejść na stronę logowania
    if (isAuthenticated && isLoginPage) {
      next("/"); // Przekieruj na stronę główną
      return;
    }

    // Jeśli użytkownik nie jest zalogowany i próbuje wejść na chronioną stronę
    if (!isAuthenticated && !isLoginPage) {
      next("/login"); // Przekieruj na stronę logowania
      return;
    }

    // W pozostałych przypadkach pozwól na przejście
    next();
  } catch (error) {
    console.error("Błąd w router guard:", error);
    // W przypadku błędu przekieruj na login dla bezpieczeństwa
    next("/login");
  }
});

export default router;
