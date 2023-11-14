import styleMigrate from '@stylistic/eslint-plugin-migrate'
import { format, react, typescript, vue } from './dist/index.js'

/** @type {import("./dist/index.d.ts").FlatESLintConfigItem[]} */
export default [
  ...react({ tsconfigPath: './tsconfig.json' }),
  ...format,
  {
    files: ['src/configs/*.ts'],
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'style-migrate': styleMigrate,
    },
    rules: {
      'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
    },
  }
]