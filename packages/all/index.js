/** @type { import('eslint').Linter.Config } */
module.exports = {
  // overrides: [
  //   {
  //     files: ['**/*.vue'],
  //     parser: 'vue-eslint-parser',
  //     extends: ["@ziloen/eslint-config-vue"],
  //     parserOptions: {
  //       ecmaVersion: 'latest',
  //       parser: '@typescript-eslint/parser',
  //       extraFileExtensions: ['.vue']
  //     }
  //   },

  //   {
  //     files: ['**/*.ts', '**/*.js'],
  //     parser: '@typescript-eslint/parser',
  //     extends: ['@ziloen/eslint-config-typescript'],
  //   },

  //   {
  //     files: ['**/*.jsx', '**/*.tsx'],
  //     parser: '@typescript-eslint/parser',
  //     extends: ['@ziloen/eslint-config-react'],
  //   }
  // ],
  extends: [
    '@ziloen/eslint-config-react',
    '@ziloen/eslint-config-typescript',
    '@ziloen/eslint-config-vue'
  ],

  ignorePatterns: ['.*', '/node_modules/**/*.*']
}