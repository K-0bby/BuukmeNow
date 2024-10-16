import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore 'dist' folder to avoid linting compiled files
  { ignores: ['dist'] },
  
  // JavaScript and JSX files configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest', // Set to 'latest' for ECMAScript 2023+ features
      globals: globals.browser, // Use browser globals
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { 
      react: { version: '18.3' } // Ensure the correct React version is used
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Customize React and hooks rules
      'react/jsx-no-target-blank': 'off', // Allow links without rel="noopener"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // 'react/react-in-jsx-scope' is no longer necessary in React 17+
      'react/react-in-jsx-scope': 'off',

      // Standard linting rules
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  
  // Tailwind config file specific configuration
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      ecmaVersion: 2020, // Tailwind config may use ECMAScript 2020 features
      globals: { require: 'readonly' }, // Allow use of 'require' in config
    },
    rules: {
      'no-undef': 'off', // Disable undefined variable check for Tailwind config
    },
  },
];
