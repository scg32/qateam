import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar } from '@quasar/vite-plugin';
import { defineConfig as vitestDefineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue(), quasar()],
  resolve: {
    alias: {
      '@': '/src',  // alias @ wskazuje na katalog src
    },
  },
  test: {
    globals: true,  // Włącza globalne funkcje jak `describe`, `it`, `expect`
    environment: 'jsdom', // Potrzebne dla testów w przeglądarkowym środowisku
    include: ['src/**/*.{test,spec}.ts'], // Określa pliki testów
    testTransformMode: {
      web: ['**/*.vue'], // Obsługuje pliki `.vue` w testach
    },
  },
});
