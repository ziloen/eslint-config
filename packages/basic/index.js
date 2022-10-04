/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: [
    'unicorn'
  ],
  extends: 'eslint:recommended',
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '.*',
    '/node_modules/**/*.*'
  ],
  rules: {
    /** 检查数组方法返回值 */
    'array-callback-return': ['error', { 'allowImplicit': true }],
    /** 倾向使用全等 === */
    'eqeqeq': ['warn', 'smart'],
    /** `a = a || b` 简写为 `a ||= b` */
    'logical-assignment-operators': ['warn'],
    /** 限制最大回调嵌套数量 */
    'max-nested-callbacks': ['warn', 5],
    /** for 与 await 一起使用会串行阻塞线程，可以使用 Promise.all() 一次发起多个 Promise */
    'no-await-in-loop': 'warn',
    /** 不要嵌套 promise */
    'no-async-promise-executor': 'warn',
    /** 别用 */
    'no-caller': 'error',
    /** 错误使用 */
    'no-constant-binary-expression': 'error',
    /** console.log使用后删除 */
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    /** `constructor` 中不应有返回值(允许作为控制流使用) */
    'no-constructor-return': 'warn',
    'no-empty': 'off',
    'no-eval': 'warn',
    /** 防止`switch case`忘写`break` */
    'no-fallthrough': ['error', {
      allowEmptyCase: true
    }],
    /** Promise 内 return 没有意义，使用 resolve 或 reject */
    'no-promise-executor-return': 'error',
    /** 令人混淆的 window 上的变量 */
    'no-restricted-globals': [
      'error',
      'event',
      'name',
      'length',
      'status'
    ],
    /** 禁止不必要的 await */
    'no-return-await': 'warn',
    'no-unused-vars': 'off',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'object-shorthand': ['warn', 'always', {
      avoidQuotes: true
    }],

    'prefer-const': ['warn', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true
    }],
    /** 使用 `a ** b` 替代 `Math.pow(a, b)` */
    'prefer-exponentiation-operator': 'warn',
    /** 使用 `Object.hasOwn()` 替代 `Object.prototype.hasOwnProperty.call()` */
    'prefer-object-has-own': 'warn',
    /** 这可能会导致数据竞争 */
    'require-atomic-updates': 'error',

    // Node 插件 未安装
    /** 同步发方法会阻塞线程，使用异步方法代替 */
    // 'node/no-sync': 'warn',

    // -------------------------------------------------------------
    // unicorn https://github.com/sindresorhus/eslint-plugin-unicorn
    // -------------------------------------------------------------
    'unicorn/better-regex': ['warn', {
      sortCharacterClasses: false
    }],
    'unicorn/error-message': 'warn',
    'unicorn/expiring-todo-comments': 'warn',
    'unicorn/no-instanceof-array': 'warn',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-document-cookie': 'warn',

    /** 警告嵌套三元运算符 (可以通过对齐来表示，取消警告) */
    // 'no-nested-ternary': 'off',
    // 'unicorn/no-nested-ternary': 'warn',

    'unicorn/no-new-buffer': 'error',
    /** 禁止声明`then`属性，以免和`Promsie`混淆 */
    'unicorn/no-thenable': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-useless-fallback-in-spread': 'warn',
    'unicorn/no-useless-promise-resolve-reject': 'warn',
    'unicorn/no-useless-spread': 'warn',
    'unicorn/no-useless-undefined': ['warn', {
      checkArguments: false
    }],
    'unicorn/no-zero-fractions': 'warn',
    'unicorn/number-literal-case': 'warn',
    'unicorn/prefer-at': 'warn',
    'unicorn/prefer-code-point': 'warn',
    'unicorn/prefer-dom-node-text-content': 'warn',
    'unicorn/prefer-dom-node-append': 'warn',
    'unicorn/prefer-export-from': ['warn', {
      ignoreUsedVariables: true
    }],
    'unicorn/prefer-keyboard-event-key': 'warn',
    'unicorn/prefer-modern-dom-apis': 'warn',
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/prefer-query-selector': 'warn',
    'unicorn/prefer-string-slice': 'warn'
  }
}