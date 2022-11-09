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
    /** 16+ 不需要此导入 React */
    'react/react-in-jsx-scope': 'off',
    /** 让 TS 检查 */
    'react/jsx-no-undef': 'off',
    /** 简写 <React.Fragment></React.Fragment> => <></> */
    'react/jsx-fragments': ['warn', 'syntax'],
    /** 避免错误用法 */
    'react/no-invalid-html-attribute': "warn",
  }
}