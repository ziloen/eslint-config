/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlatESLintConfigItem } from 'eslint-define-config'
import { parserTs, parserVue, pluginTs, pluginVue } from '../plugins'
import { typescript } from './typescript'

export const vue: FlatESLintConfigItem[] = [
  ...typescript,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTs as any,
        ecmaFeatures: {
          jsx: true
        },
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      }
    },
    plugins: {
      '@typescript-eslint': pluginTs as any,
      vue: pluginVue,
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...pluginVue.configs['vue3-essential'].rules,
      /** allow ununed vars */
      'vue/no-unused-vars': 'off',
      'vue/html-self-closing': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      // 'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-prop-types': 'off',
      'vue/singleline-html-element-content-newline': 'off',
    }
  }
]