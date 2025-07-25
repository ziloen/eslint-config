import { cwd } from 'node:process'
import tseslint from 'typescript-eslint'
import type { FlatESLintConfig } from '~/types'
import { javascript } from './javascript'



let loaded = false

export function typescript(
  {
    project,
    tsconfigRootDir = cwd()
  }: {
    project?: string | string[]
    tsconfigRootDir?: string
  } = {}
): FlatESLintConfig[] {
  if (loaded) {
    return []
  }

  loaded = true

  return [
    ...javascript,
    ...tseslint.config(
      ...tseslint.configs.strictTypeChecked,
      {
        name: 'typescript/type-checked/project',
        languageOptions: {
          parserOptions: {
            project: project ? project : undefined,
            projectService: project ? undefined : {
              allowDefaultProject: ['./*.js'],
              defaultProject: './tsconfig.json',
            },
            tsconfigRootDir
          }
        }
      },
      {
        name: 'typescript/overrides',
        files: [
          '**/*.js',
          '**/*.jsx',
          '**/*.ts',
          '**/*.tsx',
          '**/*.mts',
          '**/*.cts',
          '**/*.vue'
        ],
        languageOptions: {
          parser: tseslint.parser,
          sourceType: 'module',
          parserOptions: {
            ecmaVersion: 'latest',

            jsDocParsingMode: 'none',
            extraFileExtensions: ['.vue'],

            project: project ? project : undefined,
            projectService: project ? undefined : {
              allowDefaultProject: ['./*.js'],
              defaultProject: './tsconfig.json',
            },
            tsconfigRootDir,
          }
        },
        rules: {
        /** ✅禁止不必要的 await */
        // '@typescript-eslint/await-thenable': 'warn',

          /** 分离 type import */
          '@typescript-eslint/consistent-type-imports': 'warn',

          /** 🎨不限制只使用 interface 或者 type */
          '@typescript-eslint/consistent-type-definitions': 'off',

          /** 可选参数必须放在最后 */
          'default-param-last': 'off',
          '@typescript-eslint/default-param-last': 'error',

          /** 🎨不强制使用 `.`(点) 来访问属性 */
          'dot-notation': 'off',
          '@typescript-eslint/dot-notation': 'off',

          /** 🔒禁止使用 void 函数的返回值 ("off" 因为 return voidExpression() 这种缩写 { voidExpress(); return }  也会报错) */
          '@typescript-eslint/no-confusing-void-expression': [
            'off',
            {
              ignoreArrowShorthand: true
            }
          ],

          '@typescript-eslint/no-deprecated': 'off',

          /** 不允许 class 有重复的成员 (TypeScript 已检查，禁用此规则) */
          'no-dupe-class-members': 'off',
          '@typescript-eslint/no-dupe-class-members': 'off',

          /** 🎨允许空函数 */
          '@typescript-eslint/no-empty-function': 'off',

          /** ✅允许显式 any */
          '@typescript-eslint/no-explicit-any': 'off',

          /** ✅允许未处理的 Promise */
          '@typescript-eslint/no-floating-promises': 'off',

          /**
         * 以下也会被视为无效 void 类型，故关闭
         * ```ts
         * declare function a(): void | number;
         * ```
         */
          '@typescript-eslint/no-invalid-void-type': 'off',

          /** 🔒不允许隐式 eval */
          // "no-implied-eval": "off",
          // "@typescript-eslint/no-implied-eval": "error",

          /** 禁止 for 循环内声明的函数引用函数外变量 */
          'no-loop-func': 'off',
          '@typescript-eslint/no-loop-func': 'error',

          /** 禁止 promise 错误用法 */
          '@typescript-eslint/no-misused-promises': [
            'error',
            {
            /** 允许快捷写法 */
              checksVoidReturn: false
            }
          ],

          /** ✅禁止超出精度范围的数字 */
          // 'no-loss-of-precision': 'off',
          // '@typescript-eslint/no-loss-of-precision': 'error',

          /** 🔒不允许扩散非对象 `{...[]}`、`{...new Map}` 等错误用法 */
          '@typescript-eslint/no-misused-spread': 'error',

          /** 允许非空断言 */
          '@typescript-eslint/no-non-null-assertion': 'off',

          /** 允许 TypeScript 重载声明 */
          'no-redeclare': 'off',
          '@typescript-eslint/no-redeclare': ['error'],

          /** ✅禁止冗余类型定义 */
          '@typescript-eslint/no-redundant-type-constituents': 'warn',

          'no-restricted-syntax': [
            'warn',
            /**
           * 使用 `#private` 替代 `private` 访问修饰符
           */
            {
              selector: ':matches(PropertyDefinition, MethodDefinition)[accessibility="private"]',
              message: 'Use `#private` instead '
            },
            /**
           * 多余的 `public` 访问修饰符
           */
            {
              selector: ':matches(PropertyDefinition, MethodDefinition)[accessibility="public"]',
              message: 'Unnecessary `public` access modifier, just remove it'
            },
          ],

          /** 🔒Disallow throwing literals as exceptions. */
          'no-throw-literal': 'off',
          '@typescript-eslint/only-throw-error': [
            'error',
            {
              allowThrowingAny: false,
              allowThrowingUnknown: false
            }
          ],



          /** 禁用默认`no-undef`，eslint 不会检查`*.d.ts`，导致误报全局变量与类型不存在 */
          'no-undef': 'off',

          /**
         * 🔒不必要的条件判断
         *
         * 因为有时类型不正确，autofix 会导致运行时错误，故关闭
         */
          '@typescript-eslint/no-unnecessary-condition': 'off',

          /**
         * `function asType<T>(val: any): asserts val is T { }` 也会被被认作多余的类型参数
         */
          '@typescript-eslint/no-unnecessary-type-parameters': 'off',

          /**
         * ✅不必要的类型断言
         *
         * 因为有时类型不正确，autofix 会导致 TS 错误，故关闭
         */
          '@typescript-eslint/no-unnecessary-type-assertion': 'off',

          /** `-` 只允许 number | bigint */
          '@typescript-eslint/no-unsafe-unary-minus': 'error',

          /** 警告未使用的表达式 */
          'no-unused-expressions': 'off',
          '@typescript-eslint/no-unused-expressions': [
            'warn',
            {
              allowShortCircuit: true,
              enforceForJSX: true,
            }
          ],

          /** 允许未使用变量 */
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'off',

          /**
         *
         */
          '@typescript-eslint/prefer-nullish-coalescing': [
            'warn',
            {
              ignorePrimitives: {
                bigint: true,
                boolean: true,
                number: true,
                string: true
              }
            }
          ],

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
         * 🔒 要求 Promise reject 时传入 Error 对象
         */
          'prefer-promise-reject-errors': 'off',
          '@typescript-eslint/prefer-promise-reject-errors': 'error',

          /**
         * 🔧返回 promise 的函数必须有 async 关键字
         *
         * 不写也行，不限制此偏好，故关闭
         */
          '@typescript-eslint/promise-function-async': [
            'off',
            {
              checkArrowFunctions: false
            }
          ],

          /**
         * 数组排序需显式指明排序方法，默认行为可能并不是想要的结果
         * ```ts
         * [1, 2, 3, 10, 20, 30].sort(); //→ [1, 10, 2, 20, 3, 30]
         * ```
         */
          '@typescript-eslint/require-array-sort-compare': ['error'],

          'require-await': 'off',
          '@typescript-eslint/require-await': 'off',

          /** ✅模板字符串只允许数字字符串 */
          '@typescript-eslint/restrict-template-expressions': [
            'error',
            {
              allowAny: false,
              allowArray: false,
              allowBoolean: false,
              allowNullish: false,
              allowNumber: true,
              allowRegExp: false,
            }
          ],

          /** 允许可合为一个联合类型的函数声明多个函数签名 */
          '@typescript-eslint/unified-signatures': 'off',
        }
      },
      {
        name: 'typescript/disable-js-type-check',
        files: ['**/*.js', '**/*.jsx'],
        extends: [tseslint.configs.disableTypeChecked],
      },
      {
        name: 'typescript/off',
        rules: {
          /** 🎨不限制只使用 interface 或者 type */
          '@typescript-eslint/consistent-type-definitions': 'off',

          /** 可选参数必须放在最后 */
          'default-param-last': 'off',
          '@typescript-eslint/default-param-last': 'error',

          /** 🎨不强制使用 `.`(点) 来访问属性 */
          'dot-notation': 'off',
          '@typescript-eslint/dot-notation': 'off',

          /** 不允许 class 有重复的成员 (TypeScript 已检查，禁用此规则) */
          'no-dupe-class-members': 'off',
          '@typescript-eslint/no-dupe-class-members': 'off',

          /** 🎨允许空函数 */
          '@typescript-eslint/no-empty-function': 'off',

          /** 允许非空断言 */
          '@typescript-eslint/no-non-null-assertion': 'off',

          /** 允许未使用变量 */
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'off',

          /** 禁用默认`no-undef`，eslint 不会检查`*.d.ts`，导致误报全局变量与类型不存在 */
          'no-undef': 'off',

          'require-await': 'off',
          '@typescript-eslint/require-await': 'off',
        }
      },
      {
        name: 'typescript/dts-overrides',
        files: ['**/*.d.ts'],
        rules: {
          '@typescript-eslint/ban-types': 'off',
          '@typescript-eslint/no-invalid-void-type': 'off',
          '@typescript-eslint/consistent-type-imports': 'off',
          '@typescript-eslint/no-empty-object-type': 'off'
        }
      },
    ) as FlatESLintConfig[],
  ]
}