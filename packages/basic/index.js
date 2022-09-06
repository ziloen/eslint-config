/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: [
    'unicorn',
  ],
  extends: "eslint:recommended",
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
    'eqeqeq': ['warn', 'smart'],
    'no-caller': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'warn',
    'no-empty': 'off',
    'no-eval': 'warn',
    'no-unused-vars': 'off',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'prefer-const': ['warn', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true
    }],
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-has-own': 'warn',
    /** 令人混淆的 window 上的变量 */
    'no-restricted-globals': [
      'error',
      'event',
      'name',
      'length',
      'status'
    ],

    // -------------------------------------------------------------
    // unicorn https://github.com/sindresorhus/eslint-plugin-unicorn
    // -------------------------------------------------------------
    'unicorn/better-regex': ['warn', {
      sortCharacterClasses: false
    }],
    'unicorn/no-instanceof-array': 'warn',
    'unicorn/no-invalid-remove-event-listener': 'error',
    // 'unicorn/consistent-function-scoping': ['warn', {
    //   checkArrowFunctions: false
    // }],
    'unicorn/error-message': 'warn',
    'unicorn/expiring-todo-comments': 'warn',
    'unicorn/no-document-cookie': 'warn',

    'no-nested-ternary': 'off',
    'unicorn/no-nested-ternary': 'warn',

    'unicorn/no-new-buffer': 'error',
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
    'unicorn/prefer-string-slice': 'warn',
  }
}