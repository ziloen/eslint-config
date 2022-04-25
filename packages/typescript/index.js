module.exports = {
  rules: {
    '@typescript-eslint/restrict-template-expressions': ['warn', {
      allowNumber: true,
      allowBoolean: true,
    }],
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
  }
}