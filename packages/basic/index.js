/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: [
    'unicorn'
  ],
  extends: 'eslint:recommended',
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'LICENSE*',
    // lock files
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock'
  ],
  rules: {
    /** 检查数组方法返回值 */
    'array-callback-return': ['error', { 'allowImplicit': true }],
    /** 禁止定义块作用域外的访问 var 变量 */
    'block-scoped-var': 'error',
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
    /** Promise 内 return 没有意义，使用 resolve 或 reject (无法配置允许箭头函数，取消警告) */
    // 'no-promise-executor-return': 'error',
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
      ignoreReadBeforeAssign: false
    }],
    /** 使用 `a ** b` 替代 `Math.pow(a, b)` */
    'prefer-exponentiation-operator': 'warn',
    /** 使用 `Object.hasOwn()` 替代 `Object.prototype.hasOwnProperty.call()` */
    'prefer-object-has-own': 'warn',
    /** 这可能会导致数据竞争 */
    'require-atomic-updates': 'error',
    /** 不允许 new Symbol 与 new BigInt 这种错误用法 */
    'no-new-native-nonconstructor': 'error',

    // Node 插件 未安装
    /** 同步发方法会阻塞线程，使用异步方法代替 */
    // 'node/no-sync': 'warn',

    // -------------------------------------------------------------
    // unicorn https://github.com/sindresorhus/eslint-plugin-unicorn
    // -------------------------------------------------------------
    /** 🔧更好的正则 */
    'unicorn/better-regex': ['warn', {
      sortCharacterClasses: false
    }],
    /** Error 应有错误信息 */
    'unicorn/error-message': 'warn',
    'unicorn/expiring-todo-comments': 'warn',
    /** 🔧不要使用 instanceof Array 判断数组 */
    'unicorn/no-instanceof-array': 'warn',
    /** 事件监听移除字面量函数是无效的 */
    'unicorn/no-invalid-remove-event-listener': 'error',
    /** 手动操作原生 Cookie 很麻烦容易出错 */
    'unicorn/no-document-cookie': 'warn',
    /** 警告嵌套三元运算符 (可以通过对齐来表示，不警告) */
    // 'no-nested-ternary': 'off',
    // 'unicorn/no-nested-ternary': 'warn',
    /** 🔧使用 Buffer.from() 或 Buffer.alloc() 代替 */
    'unicorn/no-new-buffer': 'error',
    /** 禁止声明`then`属性，以免和`Promsie`混淆 */
    'unicorn/no-thenable': 'error',
    /** 使用 var === undefined 来检查 而不是 typeof var === 'undefined'，除了全局变量 */
    'unicorn/no-typeof-undefined': ['warn', {
      checkGlobalVariables: false
    }],
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
    /** 使用新的API */
    'unicorn/prefer-keyboard-event-key': 'warn',
    /** 🔧使用更现代的 DOM API */
    'unicorn/prefer-modern-dom-apis': 'warn',
    /** 🔧来自 Node 的方法应添加 node: 协议前缀，避免混淆 */
    'unicorn/prefer-node-protocol': 'warn',
    /** 🔧使用同一种方法来选择 DOM 元素，避免混淆 */
    'unicorn/prefer-query-selector': 'warn',
    /** 🔧使用 Set#size 直接获得数量而不是先转换为 Array 再读取 Array#length */
    'unicorn/prefer-set-size': 'warn',
    'unicorn/prefer-string-slice': 'warn'
  }
}