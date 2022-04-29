module.exports = {
  plugins: [
    'unicorn',
  ],
  extends: "eslint:recommended",
  rules: {
    'eqeqeq': ['warn', 'smart'],
    'no-caller': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'warn',
    'no-eval': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'prefer-const': ['warn', {
      destructuring: 'all',
      ignoreReadBeforeAssign: true
    }],
  }
}