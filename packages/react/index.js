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
      version: 'detect'
    }
  },
  plugins: ['jsx-expressions'],
  rules: {
    /** 16+ 不需要此导入 React */
    'react/react-in-jsx-scope': 'off',
    /** 让 TS 检查 */
    'react/jsx-no-undef': 'off',
    /** 简写 <React.Fragment></React.Fragment> => <></> */
    'react/jsx-fragments': ['warn', 'syntax'],
    /** 避免错误用法 */
    'react/no-invalid-html-attribute': 'warn',

    /** 不允许可能出错的的 render 类型（number | string | object），（即使是 bool 也会报错，太蠢了） */
    // 'react/jsx-no-leaked-render': 'error',
    /** 严格 jsx render 类型，支持 TS 检查，替代 react/jsx-no-leaked-render */
    'jsx-expressions/strict-logical-expressions': 'error'
  }
}