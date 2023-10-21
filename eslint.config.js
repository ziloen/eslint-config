import { format, typescript } from './dist/index.js'

/** @type {import("./dist/index.d.ts").FlatESLintConfigItem[]} */
export default [
  ...typescript,
  ...format,
]