import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  outDir: 'dist',
  unbundle: false,
  minify: false,
  dts: {
    oxc: true,
  },
  format: ['esm'],
  platform: 'node',
  treeshake: true,
  fixedExtension: false,
  skipNodeModulesBundle: true,
  sourcemap: false,
  clean: true,
})