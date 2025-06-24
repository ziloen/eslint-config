import { default as pluginVue } from 'eslint-plugin-vue'
import { cwd } from 'node:process'
import tseslint from 'typescript-eslint'
import type { FlatESLintConfig } from '~/types'
import { typescript } from './typescript'

export function vue(
  {
    project,
    tsconfigRootDir = cwd()
  }: {
    project?: string | string[]
    tsconfigRootDir?: string
  } = {}
): FlatESLintConfig[] {

  return [
    ...typescript({ project, tsconfigRootDir }),
    ...pluginVue.configs['flat/essential'],
    {
      name: 'vue/overrides',
      files: ['**/*.vue'],
      languageOptions: {
        parserOptions: {
          parser: tseslint.parser,
          project: project ? project : undefined,
          projectService: project ? undefined : true,
          tsconfigRootDir
        }
      },
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