/** @type { import('eslint').Linter.Config } */
module.exports = {
  root: true,
  "extends": [
    "@ziloen",
    "@ziloen/eslint-config-format"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  ignorePatterns: [
    ".*.js"
  ]
}