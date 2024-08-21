/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cwd } from 'node:process'
import tseslint from 'typescript-eslint'
import type { FlatESLintConfig } from '~/types'
import { pluginStylistic, pluginZiloen } from '../plugins'

export function format(
  {
    project,
    tsconfigRootDir = cwd()
  }: {
    project?: string | string[]
    tsconfigRootDir?: string
  } = {}
): FlatESLintConfig[] {
  return [
    {
      name: 'format/general',
      plugins: {
        '@typescript-eslint': tseslint.plugin as any,
        ziloen: pluginZiloen as any,
        style: pluginStylistic as any,
      },
      languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
          project: project ? project : undefined,
          projectService: project ? undefined : true,
          tsconfigRootDir,
          sourceType: 'module',
          extraFileExtensions: ['.vue'],
        }
      },
      rules: {
        /** 🔧数组括号换行 */
        'style/array-bracket-newline': ['warn', 'consistent'],

        /** 🔧数组前后空格 */
        'style/array-bracket-spacing': ['warn', 'never'],

        /** 🔧数组内元素换行 */
        'style/array-element-newline': ['warn', 'consistent'],

        /** 🔧箭头函数括号 */
        'style/arrow-parens': ['warn', 'as-needed'],

        /** 🔧箭头左右空格 */
        'style/arrow-spacing': 'warn',

        /** 🔧计算属性名内部空格 */
        'style/computed-property-spacing': 'warn',

        /** 🔧逗号位置 */
        'style/comma-style': 'warn',

        /** 🔧属性`o.p`点号位置 */
        'style/dot-location': ['warn', 'property'],

        /** 🔧函数调用参数换行 */
        'style/function-call-argument-newline': ['warn', 'consistent'],

        /** 🔧生成器函数星号前后空格 */
        'style/generator-star-spacing': ['warn', {
          before: false,
          after: true,
          named: 'after',
          anonymous: 'after',
          method: 'before'
        }],

        /** 最大长度 */
        'style/max-len': ['warn', {
          code: 120,
          tabWidth: 2,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true
        }],

        /** 多行三元表达式 */
        // 'multiline-ternary': ['warn'],

        /** 
         * 🔧new 表达式括号
         * ```ts
         * const a = new A().a()
         * //        ^ 会被改成 (new A).a()，且无法配置，故关闭
         * ```
         */
        'style/new-parens': 'off',

        /** 🔧链式调用换行 */
        'style/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],

        /** 禁止混用空格和 tab 作为 indent */
        'style/no-mixed-spaces-and-tabs': 'warn',

        /** 多余的空格 */
        'style/no-multi-spaces': 'warn',

        /** 多行空行 */
        'style/no-multiple-empty-lines': ['warn', { max: 3 }],

        /** 尾随空格 */
        'style/no-trailing-spaces': ['warn', {
          /** 注释内可能有 markdown，尾随空格会影响显示格式 */
          ignoreComments: true
        }],

        /** 禁止不必要的重命名 */
        'no-useless-rename': 'warn',

        /** 对象与属性间的空格 */
        'style/no-whitespace-before-property': 'warn',

        /** 对象花括号换行 */
        'style/object-curly-newline': ['warn', { consistent: true }],

        /** 对象键快捷写法 */
        'object-shorthand': ['warn', 'always', {
          avoidQuotes: true
        }],

        /** 偏好模板字符串 */
        'prefer-template': 'warn',

        /** 属性名的引号 */
        'style/quote-props': ['warn', 'as-needed'],

        /** 展开操作符前后空格 */
        'style/rest-spread-spacing': ['warn', 'never'],

        /** 分号前后空格 */
        'style/semi-spacing': ['warn', { before: false, after: true }],

        /** 分号位置 */
        'style/semi-style': 'warn',

        /** 
         * 排序
         * 
         * FIXME: 不支持 import { type foo } from 'bar' type import 语法，故关闭
         */
        'sort-imports': ['off', {
          ignoreDeclarationSort: true
        }],

        /** 括号中前后空格 */
        'style/space-in-parens': 'warn',

        /** 一元操作符前后空格 */
        'style/space-unary-ops': ['warn', { words: true, nonwords: false }],

        /** switch case 冒号前后空格 */
        'style/switch-colon-spacing': 'warn',

        /** 模板字符串花括号中前后空格 */
        'style/template-curly-spacing': 'warn',

        /** 生成器函数星号空格 */
        'style/yield-star-spacing': ['warn', 'after'],



        // -------------------------------------------------------------
        // 以下需要覆盖原配置 以在 ts 文件中生效
        // -------------------------------------------------------------

        /** 语句块内部前后空格 */
        // 'block-spacing': 'off',
        'style/block-spacing': 'warn',

        /** 括号风格 */
        // 'brace-style': 'off',
        'style/brace-style': ['warn', '1tbs', { allowSingleLine: true }],

        /** 尾随逗号 */
        // 'comma-dangle': 'off',
        'style/comma-dangle': ['warn', 'only-multiline'],

        /** 逗号前后空格 */
        // 'comma-spacing': 'off',
        'style/comma-spacing': 'warn',

        /** 🔧函数调用空格 */
        // 'func-call-spacing': 'off',
        'style/func-call-spacing': 'warn',

        /** 🔧缩进 */
        'style/indent': ['warn', 2, {
          /** 
           * 同时定义多个变量时，对齐到第一个变量定义
           * 
           * ```ts
           * const a = 1,
           *       b = 2,
           *       c = 3;
           * // same indent as `a`
           * ```
           */
          VariableDeclarator: 'first',
          /** 
           * swtich case 增加 1 indent
           * 
           * ```ts
           * switch (a) {
           *   case 1:
           *     // ^1 indent
           *     break;
           * }
           * ```
           */
          SwitchCase: 1,
          /**
           * ```ts
           * (() => {
           *   const a = 1;
           *   // ^1 indent 
           * })();
           * ```
           */
          outerIIFEBody: 1,
          /**
           * ```ts
           * obj
           *   .prop
           *   .method();
           * // ^1 indent
           * ```
           */
          MemberExpression: 1,
          // FunctionExpression: { parameters: 1, body: 1 },
          // FunctionDeclaration: { parameters: 1, body: 1 },
          // StaticBlock: { body: 1 },
          // CallExpression: { arguments: 1 },
          // ArrayExpression: 1,
          // ObjectExpression: 1,
          // ImportDeclaration: 1,
          /** 嵌套三元表达式不增加 indent */
          flatTernaryExpressions: false,
          /** 三元表达式偏移 */
          offsetTernaryExpressions: true,
          // ignoreComments: false,
          /** 忽略一些无法正确处理的边缘情况，手动添加 indent */
          ignoredNodes: [
            // Decorators
            // 'PropertyDefinition[decorators]',
            // 'TSUnionType',
            // 'FunctionExpression[params]:has(Identifier[decorators])',
            // 类型泛型参数
            // 'TSTypeParameterInstantiation',
            // 'TSIntersectionType',
          ]
        }],

        /** 二元操作符缩进 */
        'style/indent-binary-ops': ['warn', 2],

        /** 🔧对象键名空格 */
        // 'key-spacing': 'off',
        'style/key-spacing': ['warn'],

        /** 关键词 空格 */
        // 'keyword-spacing': 'off',
        'style/keyword-spacing': 'warn',

        /** 多余的括号 */
        // 'no-extra-parens': 'off',
        'style/no-extra-parens': ['warn', 'all', {
          /** 允许 JSDoc 类型转换 */
          allowParensAfterCommentPattern: '@type',
          /** 忽略 JSX */
          ignoreJSX: 'all',
          /** 允许条件赋值包围括号 */
          conditionalAssign: false,
          /** 允许 return 赋值包围括号 */
          returnAssign: false,
          /** 允许三元表达式内包围括号 */
          ternaryOperandBinaryExpressions: false,
          /** 允许嵌套二元表达式包围括号 */
          nestedBinaryExpressions: false
        }],

        /** 多余的分号 */
        'style/no-extra-semi': ['warn'],

        /** 对象花括号内部前后空格 */
        // 'object-curly-spacing': 'off',
        'style/object-curly-spacing': ['warn', 'always'],

        /** 🔧字符串引号 */
        // quotes: 'off',
        'style/quotes': ['warn', 'single', {
          avoidEscape: true,
          allowTemplateLiterals: true
        }],

        /** 分号 */
        // semi: 'off',
        'style/semi': ['warn', 'never'],

        /** 块语句前的空格 */
        // 'space-before-blocks': 'off',
        'style/space-before-blocks': 'warn',

        /** 函数声明参数括号前的空格 */
        // 'space-before-function-paren': 'off',
        'style/space-before-function-paren': ['warn', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }],

        /** 操作符左右空格 */
        // 'space-infix-ops': 'off',
        'style/space-infix-ops': 'warn',



        // -------------------------------------------------------------
        // 以下为 TS Plugin Rules
        // -------------------------------------------------------------

        /** 类型定义属性间隔符 `;` / `,` / none */
        'style/member-delimiter-style': ['warn', {
          multiline: { delimiter: 'none', requireLast: false },
          singleline: { requireLast: false },
          multilineDetection: 'brackets'
        }],

        /** 🔧多余的限定符 */
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',

        /** 类型标注空格 */
        'style/type-annotation-spacing': ['warn'],



        // -------------------------------------------------------------
        // 以下为其他规则
        // -------------------------------------------------------------
        'ziloen/generic-spacing': 'warn'
      },
    },
    {
      name: 'format/jsx',
      files: ['**/*.jsx', '**/*.tsx'],
      plugins: {
        style: pluginStylistic as any,
      },
      rules: {
        /** JSX 标签空格 */
        'style/jsx-tag-spacing': ['warn', {
          closingSlash: 'never',
          beforeSelfClosing: 'proportional-always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }],

        /** 括号内前后空格 */
        'style/jsx-curly-spacing': ['warn'],

        /** 🔧属性缩进 */
        'style/jsx-indent-props': ['warn', {
          indentMode: 2
        }],

        /** 🔧属性排序 */
        'style/jsx-sort-props': ['warn', {
          noSortAlphabetically: false,
          reservedFirst: true,
        }],
      }
    } as FlatESLintConfig,
  ] as FlatESLintConfig[]
}