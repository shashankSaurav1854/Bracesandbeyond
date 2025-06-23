import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      '.next/**/*',
      'out/**/*', // Add this line
      'node_modules/**/*',
      'dist/**/*',
      'build/**/*',
    ],
  },
  // Apply base configurations first
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['eslint.config.mjs'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
  },
  // Configuration for .mjs files (without TypeScript parsing)
  {
    files: ['**/*.{js,mjs,cjs}'],
    ignores: ['eslint.config.mjs'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      // Basic JS rules only
      'react/react-in-jsx-scope': 'off',
    },
  },
  // Configuration for TypeScript files
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off', // For Next.js or React 17+
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  // Configuration for JSX files (without TypeScript parsing)
  {
    files: ['**/*.{jsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
