/** @type { import('eslint').Linter.Config } */
module.exports = {
  // overrides: [
  // ],
  extends: [
    '@ziloen/eslint-config-typescript',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
}