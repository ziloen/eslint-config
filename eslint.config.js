import styleMigrate from '@stylistic/eslint-plugin-migrate'
import { format, react, typescript, vue } from './dist/index.js'

/** @type {import("./dist/index.d.ts").FlatESLintConfig[]} */
export default [
  ...react({ tsconfigPath: './tsconfig.json' }),
  ...format
]