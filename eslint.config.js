import { format, react, vue } from './dist/index.js'

const project = ['./tsconfig.json', './test/vue/tsconfig.json', './test/react/tsconfig.json']

/** @type {import("./dist/index.d.ts").FlatESLintConfig[]} */
export default [
  ...react({ project }),
  ...format({ project }),
  ...vue({ project })
]