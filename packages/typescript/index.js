/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.js', '*.d.ts'],
      parser: '@typescript-eslint/parser'
    }
  ],
  extends: [
    '@ziloen/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    /** 禁用默认`no-undef`，eslint 不会检查`*.d.ts`，导致误报全局变量与类型不存在 */
    'no-undef': 'off',

    /** ✅禁止不必要的 await */
    // '@typescript-eslint/await-thenable': 'warn',

    /** 允许空函数 */
    '@typescript-eslint/no-empty-function': 'off',
    /** 允许显式 any */
    '@typescript-eslint/no-explicit-any': 'off',

    /** 允许非空断言 */
    '@typescript-eslint/no-non-null-assertion': 'off',

    /** 允许 TypeScript 重载声明 */
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    /** 允许未使用变量 */
    '@typescript-eslint/no-unused-vars': 'off',

    /** 允许未处理的 Promise */
    '@typescript-eslint/no-floating-promises': "off",

    /** 超出范围的数字 */
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    /** 使用可选链`a?.b`替代`a && a.b` */
    '@typescript-eslint/prefer-optional-chain': 'warn',
    /** 返回 promise 的函数必须有 async 关键字 */
    '@typescript-eslint/promise-function-async': ['warn', {
      checkArrowFunctions: false
    }],
    /** 模板字符串只允许数字字符串 */
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowNumber: true
      // allowBoolean: true,
    }],

    /** 禁止使用 void 函数的返回值 */
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    /** 禁止冗余类型定义 */
    '@typescript-eslint/no-redundant-type-constituents': 'warn',

    /** 允许可合为一个联合类型的函数声明多个函数签名 */
    '@typescript-eslint/unified-signatures': 'off'
  }
}