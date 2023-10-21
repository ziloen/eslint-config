/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { FlatESLintConfigItem } from 'eslint-define-config'
import { parserTs, pluginTs } from '../plugins'
import { javascript } from './javascript'

export const typescript: FlatESLintConfigItem[] = [
  ...javascript,
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.js',
      '**/*.jsx'
    ],
    languageOptions: {
      parser: parserTs,
      sourceType: 'module',
      parserOptions: {
        project: true,
        // EXPERIMENTAL_useProjectService: true
      }
    },
    plugins: {
      '@typescript-eslint': pluginTs as any,
    },
    rules: {
      ...pluginTs.configs['strict-type-checked'].rules,

      /** ✅禁止不必要的 await */
      // '@typescript-eslint/await-thenable': 'warn',

      /** 🎨不限制只使用 interface 或者 type */
      '@typescript-eslint/consistent-type-definitions': 'off',

      /** 可选参数必须放在最后 */
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',

      /** 🎨不强制使用 `.`(点) 来访问属性 */
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': 'off',

      /** 🔒禁止使用 void 函数的返回值 ("off" 因为 return voidExpression() 这种缩写 { voidExpress(); return }  也会报错) */
      '@typescript-eslint/no-confusing-void-expression': ['off', {
        ignoreArrowShorthand: true
      }],

      /** 不允许 class 有重复的成员 (TypeScript 已检查，禁用此规则) */
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'off',

      /** 🎨允许空函数 */
      '@typescript-eslint/no-empty-function': 'off',

      /** ✅允许显式 any */
      '@typescript-eslint/no-explicit-any': 'off',

      /** ✅允许未处理的 Promise */
      '@typescript-eslint/no-floating-promises': 'off',

      /** 🔒不允许隐式 eval */
      // "no-implied-eval": "off",
      // "@typescript-eslint/no-implied-eval": "error",

      /** 禁止 for 循环内声明的函数引用函数外变量 */
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',

      /** 禁止 promise 错误用法 */
      '@typescript-eslint/no-misused-promises': ['error', {
      /** 允许快捷写法 */
        checksVoidReturn: false
      }],

      /** ✅禁止超出精度范围的数字 */
      // 'no-loss-of-precision': 'off',
      // '@typescript-eslint/no-loss-of-precision': 'error',

      /** 允许非空断言 */
      '@typescript-eslint/no-non-null-assertion': 'off',

      /** 允许 TypeScript 重载声明 */
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error'],

      /** ✅禁止冗余类型定义 */
      '@typescript-eslint/no-redundant-type-constituents': 'warn',

      /** 🔒Disallow throwing literals as exceptions. */
      'no-throw-literal': 'off',
      '@typescript-eslint/no-throw-literal': ['error', {
        allowThrowingAny: false,
        allowThrowingUnknown: false
      }],

      /** 禁用默认`no-undef`，eslint 不会检查`*.d.ts`，导致误报全局变量与类型不存在 */
      'no-undef': 'off',

      /** 
     * 🔒不必要的条件判断
     * 
     * 因为有时类型不正确，autofix 会导致运行时错误，故关闭
     */
      '@typescript-eslint/no-unnecessary-condition': 'off',

      /** 
     * ✅不必要的类型断言
     * 
     * 因为有时类型不正确，autofix 会导致 TS 错误，故关闭
     */
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',

      /** 警告未使用的表达式 */
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': ['warn', {
        allowShortCircuit: true,
        enforceForJSX: true
      }],

      /** 允许未使用变量 */
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',



      /**
     * 
     */
      '@typescript-eslint/prefer-nullish-coalescing': ['warn', {
        ignorePrimitives: {
          bigint: true,
          boolean: true,
          number: true,
          string: true
        }
      }],

      /** 
     * 使用可选链`a?.b`替代`a && a.b`
     * 
     * FIXME:
     * ```ts
     * if (!a || !a.b) 
     * //  ^ 也会被要求改成 ?.，降低可读性，且无配置，故关闭
     * ```
     */
      '@typescript-eslint/prefer-optional-chain': 'off',

      /** 
     * 🔧返回 promise 的函数必须有 async 关键字
     * 
     * 不写也行，不限制此偏好，故关闭
     */
      '@typescript-eslint/promise-function-async': ['off', {
        checkArrowFunctions: false
      }],

      /** 
     * 数组排序需显式指明排序方法，默认行为可能并不是想要的结果
     * ```ts
     * [1, 2, 3, 10, 20, 30].sort(); //→ [1, 10, 2, 20, 3, 30]
     * ```
     */
      '@typescript-eslint/require-array-sort-compare': ['error'],

      /** ✅模板字符串只允许数字字符串 */
      '@typescript-eslint/restrict-template-expressions': ['error', {
        allowNumber: true
      }],

      /** 允许可合为一个联合类型的函数声明多个函数签名 */
      '@typescript-eslint/unified-signatures': 'off',
    }
  }
]