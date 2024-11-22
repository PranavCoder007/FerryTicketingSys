// .eslintrc.js (updated for flat config)
module.exports = {
  languageOptions: {
    globals: {
      browser: true, // Global variable for browser environment
      es2021: true,   // Support for ES2021
    },
    parserOptions: {
      ecmaVersion: 12, // Use ECMAScript 2021
    },
  },
  rules: {
    // You can add custom rules here
  },
  extends: ['eslint:recommended'],
};
