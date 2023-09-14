/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: ['@typescript-eslint', 'react', 'ziloen'],
  rules: {
    /** 🔧数组括号换行 */
    'array-bracket-newline': ['warn', 'consistent'],

    /** 🔧数组前后空格 */
    'array-bracket-spacing': ['warn', 'never'],

    /** 🔧数组内元素换行 */
    'array-element-newline': ['warn', 'consistent'],

    /** 🔧箭头函数括号 */
    'arrow-parens': ['warn', 'as-needed'],

    /** 🔧箭头左右空格 */
    'arrow-spacing': 'warn',

    /** 🔧计算属性名内部空格 */
    'computed-property-spacing': 'warn',

    /** 🔧逗号位置 */
    'comma-style': 'warn',

    /** 🔧属性`o.p`点号位置 */
    'dot-location': ['warn', 'property'],

    /** 🔧函数调用参数换行 */
    'function-call-argument-newline': ['warn', 'consistent'],

    /** 🔧生成器函数星号前后空格 */
    'generator-star-spacing': ['warn', {
      before: false,
      after: true,
      named: 'after',
      anonymous: 'after',
      method: 'neither'
    }],

    /** 最大长度 */
    'max-len': ['warn', {
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
    'new-parens': 'off',

    /** 🔧链式调用换行 */
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],

    /** 禁止混用空格和 tab 作为 indent */
    'no-mixed-spaces-and-tabs': 'warn',

    /** 多余的空格 */
    'no-multi-spaces': 'warn',

    /** 多行空行 */
    'no-multiple-empty-lines': ['warn', { max: 3 }],

    /** 尾随空格 */
    'no-trailing-spaces': ['warn', {
      /** 注释内可能有 markdown，尾随空格会影响显示格式 */
      ignoreComments: true
    }],

    /** 禁止不必要的重命名 */
    'no-useless-rename': 'warn',

    /** 对象与属性间的空格 */
    'no-whitespace-before-property': 'warn',

    /** 对象花括号换行 */
    'object-curly-newline': ['warn', { consistent: true }],

    /** 对象键快捷写法 */
    'object-shorthand': ['warn', 'always', {
      avoidQuotes: true
    }],

    /** 偏好模板字符串 */
    'prefer-template': 'warn',

    /** 属性名的引号 */
    'quote-props': ['warn', 'as-needed'],

    /** 展开操作符前后空格 */
    'rest-spread-spacing': ['warn', 'never'],

    /** 分号前后空格 */
    'semi-spacing': ['warn', { before: false, after: true }],

    /** 分号位置 */
    'semi-style': 'warn',

    /** 排序 */
    'sort-imports': ['warn', {
      ignoreDeclarationSort: true
    }],

    /** 括号中前后空格 */
    'space-in-parens': 'warn',

    /** 一元操作符前后空格 */
    'space-unary-ops': ['warn', { words: true, nonwords: false }],

    /** switch case 冒号前后空格 */
    'switch-colon-spacing': 'warn',

    /** 模板字符串花括号中前后空格 */
    'template-curly-spacing': 'warn',

    /** 生成器函数星号空格 */
    'yield-star-spacing': ['warn', 'after'],



    // -------------------------------------------------------------
    // 以下需要覆盖原配置 以在 ts 文件中生效
    // -------------------------------------------------------------

    /** 语句块内部前后空格 */
    'block-spacing': 'off',
    '@typescript-eslint/block-spacing': 'warn',

    /** 括号风格 */
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['warn', '1tbs', { allowSingleLine: true }],

    /** 尾随逗号 */
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'only-multiline'],

    /** 逗号前后空格 */
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'warn',

    /** 🔧函数调用空格 */
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'warn',

    /** 🔧缩进 */
    //  https://github.com/typescript-eslint/typescript-eslint/issues/1824
    // indent: ['warn', 2, {
    //   /** 同时定义多个变量时，对齐到第一个变量定义 */
    //   VariableDeclarator: 'first',
    //   /** swtich case 增加 1 indent */
    //   SwitchCase: 1,
    //   /** 三元表达式偏移 */
    //   offsetTernaryExpressions: true
    // }],
    indent: 'off',
    '@typescript-eslint/indent': ['warn', 2, {
      /** 同时定义多个变量时，对齐到第一个变量定义 */
      VariableDeclarator: 'first',
      /** swtich case 增加 1 indent */
      SwitchCase: 1,
      /** 三元表达式偏移 */
      offsetTernaryExpressions: true,
      /** 嵌套三元表达式不增加 indent */
      flatTernaryExpressions: false,
      /** 忽略一些无法正确处理的边缘情况，手动添加 indent */
      ignoredNodes: [
        'PropertyDefinition[decorators]',
        'TSUnionType',
        'FunctionExpression[params]:has(Identifier[decorators])',
        // 类型泛型参数
        'TSTypeParameterInstantiation',
        'TSIntersectionType',
      ]
    }],

    /** 🔧对象键名空格 */
    'key-spacing': 'off',
    '@typescript-eslint/key-spacing': ['warn'],

    /** 关键词 空格 */
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'warn',

    /** 多余的括号 */
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['warn', 'all', {
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
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': ['warn'],

    /** 对象花括号内部前后空格 */
    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],

    /** 🔧字符串引号 */
    quotes: 'off',
    '@typescript-eslint/quotes': ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],

    /** 分号 */
    semi: 'off',
    '@typescript-eslint/semi': ['warn', 'never'],

    /** 块语句前的空格 */
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'warn',

    /** 函数声明参数括号前的空格 */
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],

    /** 操作符左右空格 */
    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',



    // -------------------------------------------------------------
    // 以下为 TS Plugin Rules
    // -------------------------------------------------------------

    /** 类型定义属性间隔符 `;` / `,` / none */
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: { delimiter: 'none', requireLast: false },
      singleline: { requireLast: false },
      multilineDetection: 'brackets'
    }],

    /** 🔧多余的限定符 */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',

    /** 类型标注空格 */
    '@typescript-eslint/type-annotation-spacing': ['warn'],



    // -------------------------------------------------------------
    // 以下为其他规则
    // -------------------------------------------------------------
    'ziloen/generic-spacing': 'warn'
  },
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        // -------------------------------------------------------------
        // 以下为 React Plugin Rules
        // -------------------------------------------------------------

        /** JSX 自闭合 */
        'react/self-closing-comp': ['warn', {
          component: true,
          html: false
        }],

        /** JSX 标签空格 */
        'react/jsx-tag-spacing': ['warn', {
          closingSlash: 'never',
          beforeSelfClosing: 'proportional-always',
          afterOpening: 'never',
          beforeClosing: 'never'
        }],


        /** 括号内前后空格 */
        'react/jsx-curly-spacing': ['warn'],

        /** 🔧JSX 缩进，会和 TS indent 冲突，关闭 */
        'react/jsx-indent': 'off',
        // 'react/jsx-indent': ['warn', 2, {
        //   checkAttributes: true,
        //   indentLogicalExpressions: true,
        // }],

        /** 🔧属性缩进 */
        'react/jsx-indent-props': ['warn', {
          indentMode: 2
        }],
      }
    }
  ]
}