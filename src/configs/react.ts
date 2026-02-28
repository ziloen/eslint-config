import eslintReact from '@eslint-react/eslint-plugin'
import { default as pluginReact } from 'eslint-plugin-react'
import { defineConfig, type Config } from 'eslint/config'
import { typescript } from './typescript'



export function react(
  options?: {
    project?: string | string[] | true
    tsconfigRootDir?: string
  }
): Config[] {
  return defineConfig(
    typescript(options),
    {
      name: 'react/override',
      files: ['**/*.jsx', '**/*.tsx'],
      plugins: {
        react: pluginReact,
        ...eslintReact.configs.all.plugins
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
        },
      },
      settings: {
        react: {
          version: '18'
        }
      },
      rules: {
        /** ✅需要 key */
        '@eslint-react/no-missing-key': 'error',

        /** 简写 <React.Fragment></React.Fragment> => <></> */
        '@eslint-react/jsx-shorthand-fragment': 'warn',

        /** 避免错误用法 */
        'react/no-invalid-html-attribute': 'warn',
        '@eslint-react/dom/no-unknown-property': 'warn',

        /** 避免 `<>{items.length && <div></div>}</>` 意外渲染 `0` */
        '@eslint-react/no-leaked-conditional-rendering': 'error',
      }
    }
  )
}