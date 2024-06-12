/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlatESLintConfig } from 'eslint-define-config'
import tseslint from 'typescript-eslint'
import { parserVue, pluginVue } from '../plugins'
import { typescript } from './typescript'

export function vue(): FlatESLintConfig[] {

  return [
    ...typescript(),
    ...pluginVue.configs['flat/essential'] as FlatESLintConfig[],
    {
      files: ['**/*.vue'],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          parser: tseslint.parser as any,

          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 'latest',
          extraFileExtensions: ['.vue'],
          sourceType: 'module',

          projectService: true,
          tsconfigRootDir: import.meta.dirname
        }
      },
      processor: pluginVue.processors.vue,
      rules: {
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
}