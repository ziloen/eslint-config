import { format, react } from './dist/index.js'

/** @type {import("./dist/index.d.ts").FlatESLintConfig[]} */
export default [
  ...react({ tsconfigPath: './tsconfig.json' }),
  ...format({ tsconfigPath: './tsconfig.json' })
]