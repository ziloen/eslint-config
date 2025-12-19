import { defineConfig } from 'eslint/config'
import { format, react, vue } from './dist/index.js'

const project = ['./tsconfig.json', './test/vue/tsconfig.json', './test/react/tsconfig.json']

export default defineConfig(
  react({ project }),
  format({ project }),
  vue({ project })
)