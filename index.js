/** @type { import('eslint').Linter.Config } */
const config = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      plugins: [
        'vue',
        '@typescript-eslint',
      ],
      parserOptions: {
        parser: "@typescript-eslint/parser"
        // project: ['./tsconfig.json'],
        // extraFileExtensions: ['.vue'],
      },
    },

    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
    }
  ],
  env: {
    'vue/setup-compiler-macros': true,
    node: true,
    browser: true,
    es2022: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // 控制台打印使用后应当移除
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-async-promise-executor': 'error',
    // for 与 await 一起使用会阻塞线程，可以使用 Promise.all() 一次发起多个 Promise
    'no-await-in-loop': 'warn',
    // Promise 内 return 没有意义，使用 resolve 或 reject
    'no-promise-executor-return': 'error',
    // 这可能会导致数据竞争
    'require-atomic-updates': 'error',
    // 限制最大回调嵌套数量
    'max-nested-callbacks': ['warn', 5],
    // 禁止不必要的 await
    'no-return-await': 'warn',
    // reject 最好是 new Error 对象
    'prefer-promise-reject-errors': 'warn',

    // 模板字符串 只允许字符串和数字
    '@typescript-eslint/restrict-template-expressions': ['warn', {
      allowNumber: true,
      allowBoolean: true,
    }],
    // 禁止不必要的 await
    '@typescript-eslint/await-thenable': 'warn',
    // 返回 promise 的函数必须有 async 关键字
    '@typescript-eslint/promise-function-async': ['warn', {
      checkArrowFunctions: false,
    }],

    // node
    // 同步发方法会阻塞线程，使用异步方法代替
    'node/no-sync': 'warn',
  }
}

module.exports = config