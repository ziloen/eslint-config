/** @type { import('eslint').Linter.Config } */
module.exports = {
  plugins: ['@typescript-eslint'],

  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      }
    }
  ],

  extends: [
    'plugin:vue/vue3-essential',
    '@ziloen/eslint-config-typescript'
  ],

  rules: {
    /** allow ununed vars */
    'vue/no-unused-vars': 'off',
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    // 'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  }
}