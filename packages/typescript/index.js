/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['**/*.ts', '**/*.js'],
      parser: '@typescript-eslint/parser'
    }
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    '@ziloen/eslint-config-basic'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    /** 禁用默认`no-undef`，eslint 不会检查`*.d.ts`，导致误报全局变量与类型不存在 */
    'no-undef': 'off',
    /** 禁止不必要的 await */
    '@typescript-eslint/await-thenable': 'warn',
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
    }]
  }
}