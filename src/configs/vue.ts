import { default as pluginVue } from 'eslint-plugin-vue'
import type { Config } from 'eslint/config'
import { cwd } from 'node:process'
import tseslint from 'typescript-eslint'
import { typescript } from './typescript'

export function vue(
  {
    project,
    tsconfigRootDir = cwd()
  }: {
    project?: string | string[] | true
    tsconfigRootDir?: string
  } = {}
): Config[] {

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