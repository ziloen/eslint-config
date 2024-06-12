import { format, react, vue } from './dist/index.js'

/** @type {import("./dist/index.d.ts").FlatESLintConfig[]} */
export default [
  ...react(),
  ...format(),
  ...vue()
]