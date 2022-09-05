/** @type { import('eslint').Linter.Config } */
module.exports = {
  // overrides: [
  // ],
  extends: [
    '@ziloen/eslint-config-typescript',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {

  },
}