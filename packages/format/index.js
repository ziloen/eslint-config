/** @type { import('eslint').Linter.Config } */
module.exports = {
  rules: {
    quotes: ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'no-multiple-empty-lines': ['warn', { max: 3 }],
  },
}