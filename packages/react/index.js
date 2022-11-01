/** @type { import('eslint').Linter.Config } */
module.exports = {
  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx'],
      parser: '@typescript-eslint/parser'
    }
  ],
  extends: [
    '@ziloen/eslint-config-typescript',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      'version': 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    // 让 TS 检查
    'react/jsx-no-undef': 'off'
  }
}