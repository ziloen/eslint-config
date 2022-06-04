/** @type import('@types/eslint').Linter.Config */
module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      }
    },
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@ziloen/eslint-config-typescript'
  ],
  rules: {
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    // 'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',

  },
}