/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlatESLintConfig } from 'eslint-define-config'
import { parserTs, pluginReact, pluginZiloen } from '../plugins'
import type { TSOptions } from './typescript'
import { typescript } from './typescript'



export function react({ tsconfigPath }: TSOptions) {
  return [
    ...typescript({ tsconfigPath }),
    {
      files: ['**/*.jsx', '**/*.tsx'],
      plugins: {
        react: pluginReact,
        ziloen: pluginZiloen as any
      },
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
        },
      },
      rules: {
        /** 16+ 不需要此导入 React */
        'react/react-in-jsx-scope': 'off',

        /** ✅需要 key */
        'react/jsx-key': ['error', {
          // checkFragmentShorthand: true
        }],

        /** 让 TS 检查 */
        'react/jsx-no-undef': 'off',

        /** 简写 <React.Fragment></React.Fragment> => <></> */
        'react/jsx-fragments': ['warn', 'syntax'],

        /** 避免错误用法 */
        'react/no-invalid-html-attribute': 'warn',

        /** 不允许可能出错的的 render 类型（number | string | object），（即使是 bool 也会报错，太蠢了） */
        // 'react/jsx-no-leaked-render': 'error',
        /** 严格 jsx render 类型，支持 TS 检查，替代 react/jsx-no-leaked-render */
        'ziloen/jsx-strict-logical-expressions': 'error'
      }
    }
  ] as FlatESLintConfig[]
}