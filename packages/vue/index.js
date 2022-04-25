module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',

    // reactivity transform
    'vue/no-setup-props-destructure': 'off',
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
    'prefer-const': 'warn',
    '@typescript-eslint/restrict-template-expressions': ['warn', {
      allowNumber: true,
      allowBoolean: true,
    }],
  },
}