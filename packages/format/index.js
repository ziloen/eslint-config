/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    /** 数组前后空格 */
    'array-bracket-spacing': ['warn', 'never'],

    /** 箭头函数括号 */
    'arrow-parens': ['warn', 'as-needed'],

    /** 语句块内部前后空格 */
    'block-spacing': 'warn',

    /** 计算属性名内部空格 */
    'computed-property-spacing': 'warn',

    /** 属性`o.p`点号位置 */
    'dot-location': ['warn', 'property'],

    /** 生成器函数星号前后空格 */
    'generator-star-spacing': ['warn', {
      before: false,
      after: true,
      named: 'after',
      anonymous: 'after',
      method: 'neither'
    }],

    /** 对象键名空格 */
    'key-spacing': ['warn'],

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

    /** new 表达式括号 */
    'new-parens': ['warn', 'never'],

    /** 空行 */
    'no-multiple-empty-lines': ['warn', { max: 3 }],
    /** 多余的空格 */
    'no-multi-spaces': 'warn',

    /** 尾随空格 */
    'no-trailing-spaces': 'warn',

    /** 对象与属性间的空格 */
    'no-whitespace-before-property': 'warn',

    /** 属性名的引号 */
    'quote-props': ['warn', 'as-needed'],

    /** 展开操作符前后空格 */
    'rest-spread-spacing': ['warn', 'never'],

    'yield-star-spacing': ['warn', 'after'],



    // -------------------------------------------------------------
    // 以下需要覆盖原配置 以在 ts 文件中生效
    // -------------------------------------------------------------

    /** 括号风格 */
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['warn', '1tbs', { allowSingleLine: true }],

    /** 尾随逗号 */
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['warn', 'never'],

    /** 逗号前后空格 */
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'warn',

    /** 函数调用空格 */
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'warn',

    /** 缩进 */
    indent: 'off',
    '@typescript-eslint/indent': ['warn', 2, { VariableDeclarator: 2 }],

    /** 关键词 空格 */
    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': 'warn',

    /** 多余的括号 */
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['warn', 'all', {
      /** 允许 JSDoc 类型转换 */
      allowParensAfterCommentPattern: '@type'
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

    /** 类型标注空格 */
    '@typescript-eslint/type-annotation-spacing': 'warn',

    /** 属性间隔符 `;` / `,` / none */
    '@typescript-eslint/member-delimiter-style': ['warn', {
      multiline: { delimiter: 'none', requireLast: false },
      singleline: { delimiter: 'comma', requireLast: false },
      multilineDetection: 'brackets'
    }],

    /** 🔧多余的限定符 */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn'
  }
}