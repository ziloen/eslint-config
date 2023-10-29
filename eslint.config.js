import { format, typescript, vue } from './dist/index.js'

/** @type {import("./dist/index.d.ts").FlatESLintConfigItem[]} */
export default [
  ...vue({ tsconfigPath: './tsconfig.json' }),
  ...format,
]