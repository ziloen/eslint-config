/** @type { import('eslint').Linter.Config } */
module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: "@ziloen"
}