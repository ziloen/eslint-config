/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FlatESLintConfig } from 'eslint-define-config'
// @ts-expect-error no type package
import js from '@eslint/js'
import { pluginPromise, pluginUnicorn } from '../plugins'



export const javascript: FlatESLintConfig[] = [
  {
    ignores: [
      // files
      '**/CHANGELOG*.md',
      '**/*.min.*',
      '**/LICENSE*',
      '**/auto-import?(s).d.ts',

      // lock files
      '**/package-lock.json',
      '**/pnpm-lock.yaml',
      '**/yarn.lock',
      '**/bun.lockb',

      // directories
      '**/node_modules',
      '**/dist',
      '**/.nuxt',
      '**/.next',
      '**/.vercel',
      '**/.idea',

      // not support yet
      '*.html',
    ],
  },
  js.configs.recommended,
  {
    plugins: {
      unicorn: pluginUnicorn,
      promise: pluginPromise
    },
    rules: {
      /** 检查数组方法返回值 */
      'array-callback-return': ['error', { allowImplicit: true }],

      /** 禁止定义块作用域外的访问 var 变量 */
      'block-scoped-var': 'error',

      /** 派生 class 必须要有 super() */
      'constructor-super': 'error',

      /** 
       * 倾向使用全等 ===
       * 
       * FIXME: 使用 always 时 autofix 可能导致语义改变，暂时沿用 'smart'，
       * 如果可以取消 autofix，将 option 设置为 'always'
       */
      eqeqeq: ['error', 'smart'],

      /** `a = a || b` 可以简写为 `a ||= b` */
      'logical-assignment-operators': ['warn'],

      /** 限制最大回调嵌套数量 */
      'max-nested-callbacks': ['warn', 5],

      /** for 与 await 一起使用会串行阻塞线程，可以使用 Promise.all() 一次发起多个 Promise */
      'no-await-in-loop': 'warn',

      /** 
       * 不要嵌套 promise 
       * 
       * 但有时需要 async executor，如：
       * ```js
       * new Promise(async (resolve, reject) => {
       *  const result = await doSomething();
       *  const result2 = await doSomething2(result);
       *  resolve(result2);
       * })
       * ``` 
       * 无法配置，故关闭
       */
      'no-async-promise-executor': 'off',

      /** 别用 */
      'no-caller': 'error',

      /** 错误使用 */
      'no-constant-binary-expression': 'error',

      /** 
       * console.log使用后删除
       */
      'no-console': ['off', {
        allow: ['warn', 'error']
      }],

      /** `constructor` 中不应有返回值(允许作为控制流使用) */
      'no-constructor-return': 'warn',

      /** 允许空函数声明 */
      'no-empty': 'off',

      /** 禁止使用 eval */
      'no-eval': 'warn',

      /** 
       * handled by formatter
       */
      'no-extra-semi': 'off',

      /** 防止`switch case`忘写`break` */
      'no-fallthrough': ['error', {
        allowEmptyCase: true
      }],

      /** 
       * 不允许 new Symbol 与 new BigInt 这种错误用法
       * 
       * TS 已检查 constructor，故关闭
       */
      'no-new-native-nonconstructor': 'off',
      /** @deprecated deprecated in V9 */
      'no-new-symbol': 'off',

      /** 
       * Promise 内 return 没有意义，使用 resolve 或 reject 
       * 无法配置允许箭头函数，必须要加 void，故关闭 https://github.com/eslint/eslint/issues/17278
       */
      'no-promise-executor-return': 'off',

      /**
       * 警告 export default, 偏好使用命名 export
       * 
       * config file 和 pages route 等都会使用 default export, 故关闭
       */
      'no-restricted-exports': ['off', {
        restrictDefaultExports: {
          direct: true
        }
      }],

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

      /** 交由 TS 处理 */
      'no-undef': 'off',

      /** 允许未使用的变量 */
      'no-unused-vars': 'off',

      /** 禁止使用 var 定义变量 */
      'no-var': 'error',

      /** 
       * 优先使用 const 
       * 
       * 有时解构会出现不变的变量也是用 let，autofix 会导致运行时错误，故关闭
       */
      'prefer-const': ['off', {
        destructuring: 'all',
        ignoreReadBeforeAssign: false
      }],

      /** 使用 `a ** b` 替代 `Math.pow(a, b)` */
      'prefer-exponentiation-operator': 'warn',

      /** 使用 `Object.hasOwn()` 替代 `Object.prototype.hasOwnProperty.call()` */
      'prefer-object-has-own': 'warn',

      /** 偏好 reject Error 对象 */
      'prefer-promise-reject-errors': ['warn', {
        allowEmptyReject: true
      }],

      /** 
       * 这可能会导致数据竞争
       * ```ts
       * let a: string | undefined
       * 
       * async function doSomething() {
       *   const b = a ||= await getA()
       *   //        ^^^^^^^^^^^^^^^^^^确实在多次调用时有数据竞争，但暂未找到两全之法，故关闭
       * }
       * ``` 
       */
      'require-atomic-updates': 'off',



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

      // 暂时未使用
      // 'unicorn/expiring-todo-comments': 'warn',

      /** 手动操作原生 Cookie 很麻烦容易出错 */
      'unicorn/no-document-cookie': 'warn',

      /** 🔧不要使用 instanceof Array 判断数组 */
      'unicorn/no-instanceof-array': 'warn',

      /** 事件监听移除字面量函数是无效的 */
      'unicorn/no-invalid-remove-event-listener': 'error',

      /** 警告嵌套三元运算符 (可以通过 indent 来表示，不警告) */
      // 'no-nested-ternary': 'off',
      // 'unicorn/no-nested-ternary': 'warn',

      /** 🔧 new Array 会生成 <empty slot>，无法使用 map 等，且 new Array 参数数量不同行为不同容易导致错误  */
      'unicorn/no-new-array': 'error',

      /** 🔧使用 Buffer.from() 或 Buffer.alloc() 代替 */
      'unicorn/no-new-buffer': 'error',

      /** 禁止声明`then`属性，以免和`Promsie`混淆 */
      'unicorn/no-thenable': 'error',

      /** 使用 var === undefined 来检查 而不是 typeof var === 'undefined'，除了全局变量 */
      'unicorn/no-typeof-undefined': ['warn', {
        checkGlobalVariables: false
      }],

      /** 🔧去除多余的 `await` */
      'unicorn/no-unnecessary-await': 'off',

      /** 禁止令人迷惑的数组解构 */
      'unicorn/no-unreadable-array-destructuring': 'error',

      /** 🔧去除多余的 fallback */
      'unicorn/no-useless-fallback-in-spread': 'warn',

      /** 🔧去除多余的 `Promise.resove/reject` */
      'unicorn/no-useless-promise-resolve-reject': 'warn',

      /** 🔧去除多余的 `...` */
      'unicorn/no-useless-spread': 'warn',

      /** 🔧去除多余的 undefined */
      'unicorn/no-useless-undefined': ['warn', {
        checkArguments: false
      }],

      /** 🔧`1`, `1.0`, `1.` 没有区别 */
      'unicorn/no-zero-fractions': 'warn',

      'unicorn/number-literal-case': 'warn',

      /** 🔧使用 `Array#flat()` 替代 `Array#concat()` */
      'unicorn/prefer-array-flat': 'warn',

      /** 🔧使用 `Array#flatMap()` 替代 `Array#concat().map()` */
      'unicorn/prefer-array-flat-map': 'warn',

      /** 🔧使用 indexOf 代替简单查找 findIndex */
      'unicorn/prefer-array-index-of': 'warn',

      /** 🔧偏好使用 `Array#some()` */
      'unicorn/prefer-array-some': 'warn',

      /** 🔧偏好使用 `Array#at()` 和 `String#at()` */
      'unicorn/prefer-at': 'warn',

      /** 使用 `Blob#arrayBuffer()` 和 `Blob#text()` */
      'unicorn/prefer-blob-reading-methods': 'warn',

      /**  */
      'unicorn/prefer-code-point': 'warn',

      /** 🔧使用 `Node#append()` 代替 `Node#appendChild()` */
      'unicorn/prefer-dom-node-append': 'warn',

      /** 🔧使用 HTML#dataset 而不是直接操作 attribute `data-*` */
      'unicorn/prefer-dom-node-dataset': 'warn',

      /** 🔧使用 Node#remove 代替 node.parentNode.removeChild() */
      'unicorn/prefer-dom-node-remove': 'warn',

      /** 使用 textContent 代替 innerText，参考 [Differences from innerText](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext)  */
      'unicorn/prefer-dom-node-text-content': 'warn',

      /** 🔧使用 export...from 如果导入导出未使用 */
      'unicorn/prefer-export-from': ['warn', {
        ignoreUsedVariables: true
      }],

      /** 🔧使用 Array#includes 代替 indexOf / some 代替存在性检查 */
      'unicorn/prefer-includes': 'warn',

      /** 🔧使用新的 KeyboradEvent#key 而不是 KeyboardEvent#keyCode */
      'unicorn/prefer-keyboard-event-key': 'warn',

      /** 🔧使用更现代的 DOM API */
      'unicorn/prefer-modern-dom-apis': 'warn',

      /** 🔧使用更现代的 Math API */
      'unicorn/prefer-modern-math-apis': 'warn',

      /** 🔧使用负数 -index 代替 xxx.length - index */
      'unicorn/prefer-negative-index': 'warn',

      /** 🔧来自 Node 的方法应添加 node: 协议前缀，避免混淆 */
      'unicorn/prefer-node-protocol': 'warn',

      /** 🔧使用 Object.fromEntries 代替手动 */
      'unicorn/prefer-object-from-entries': 'warn',

      /** 🔧省略 catch 如果未使用 */
      'unicorn/prefer-optional-catch-binding': 'warn',

      /** 🔧使用 prototype 上而不是实例上的 prototype */
      'unicorn/prefer-prototype-methods': 'warn',

      /** 
       * 🔧使用同一种方法来选择 DOM 元素，避免混淆
       * 
       * 禁用：不限制此偏好
       */
      'unicorn/prefer-query-selector': 'off',

      /** 🔧使用 Set#size 直接获得数量而不是先转换为 Array 再读取 Array#length */
      'unicorn/prefer-set-size': 'warn',

      /** 🔧偏好使用 string.slice 而不是 string.substring / string.substr */
      'unicorn/prefer-string-slice': 'warn',

      /** 🔧throw 应使用 new Error */
      'unicorn/throw-new-error': 'warn',



      // -------------------------------------------------------------
      // eslint-plugin-promise
      // -------------------------------------------------------------

      /** 🔧Promise 上的静态方法应直接使用 */
      'promise/no-new-statics': 'error',
    }
  },
]