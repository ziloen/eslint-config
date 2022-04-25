module.exports = {
  rules: {
    '@typescript-eslint/restrict-template-expressions': ['warn', {
      allowNumber: true,
      allowBoolean: true,
    }],
    'no-console': ['warn', {
      allow: ['warn', 'error']
    }],
  }
}