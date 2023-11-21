/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlatESLintConfig } from 'eslint-define-config'
import { parserTs, parserVue, pluginVue } from '../plugins'
import { TSOptions, typescript } from './typescript'

export function vue({ tsconfigPath }: TSOptions): FlatESLintConfig[] {

  return [
    ...typescript({ tsconfigPath }),
    {
      plugins: {
        vue: pluginVue,
      }
    },
    {
      files: ['**/*.vue'],
      // plugins: {
      //   vue: pluginVue,
      // },
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          ecmaVersion: 'latest',
          extraFileExtensions: ['.vue'],
          parser: parserTs as any,
          sourceType: 'module',

          project: true,
          // EXPERIMENTAL_useProjectService: true,
        }
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
}