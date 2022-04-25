module.exports = {
  rules: {
    /** 模板字符串只允许数字字符串 */
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowNumber: true,
      // allowBoolean: true,
    }],
    '@typescript-eslint/no-empty-function': 'off',
    /** console.log使用后删除 */
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    /** 禁止不必要的 await */
    'no-return-await': 'warn',
    // Promise 内 return 没有意义，使用 resolve 或 reject
    'no-promise-executor-return': 'error',
    /** 这可能会导致数据竞争 */
    'require-atomic-updates': 'error',
    /** 限制最大回调嵌套数量 */
    'max-nested-callbacks': ['warn', 5],
    /** 禁止不必要的 await */
    '@typescript-eslint/await-thenable': 'warn',
    /** for 与 await 一起使用会阻塞线程，可以使用 Promise.all() 一次发起多个 Promise */
    'no-await-in-loop': 'warn',
    /** 返回 promise 的函数必须有 async 关键字 */
    '@typescript-eslint/promise-function-async': ['warn', {
      checkArrowFunctions: false,
    }],
    /** 不要嵌套 promise */
    'no-async-promise-executor': 'warn',
    /** 同步发方法会阻塞线程，使用异步方法代替 */
    // 'node/no-sync': 'warn',
  }
}