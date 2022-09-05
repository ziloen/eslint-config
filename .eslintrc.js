/** @type { import('eslint').Linter.Config } */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: "@ziloen"
}