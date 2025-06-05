module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Możesz użyć do testów
  },
  extends: [
    'plugin:vue/vue3-recommended', // Zasady dla Vue 3
    'eslint:recommended', // Zasady ogólne dla JS
    'plugin:@typescript-eslint/recommended', // Zasady dla TypeScript
    'plugin:import/errors', // Obsługa importów
    'plugin:import/warnings',
    'plugin:import/typescript', // Obsługa importów w TypeScript
  ],
  parser: '@typescript-eslint/parser', // Używanie parsera TypeScript
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', // Umożliwia importy
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    // 'vue/multi-word-component-names': 'off', // Wyłączenie zakazu dla nazw jednowskaznikowych komponentów
    // 'import/no-unresolved': 'error', // Sprawdzenie poprawności importów
    // '@typescript-eslint/no-explicit-any': 'off', // Jeśli chcesz używać `any` w TypeScript
    // 'no-console': 'warn', // Ostrzeżenie dla używania `console.log`
    // 'no-debugger': 'warn', // Ostrzeżenie dla używania `debugger`
  },
};