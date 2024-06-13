/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cwd } from 'node:process'
import tseslint from 'typescript-eslint'
import type { FlatESLintConfig } from '~/types'
import { parserVue, pluginVue } from '../plugins'
import { typescript } from './typescript'

export function vue(
  { project }: { project?: string | string[] } = {}
): FlatESLintConfig[] {

  return [
    ...typescript({ project }),
    ...pluginVue.configs['flat/essential'] as FlatESLintConfig[],
    {
      name: 'vue/overrides',
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

          project: project ? project : undefined,
          projectService: project ? undefined : true,
          tsconfigRootDir: cwd()
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