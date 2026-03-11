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
  deps: {
    skipNodeModulesBundle: true,
  },
  report: {
    gzip: false,
  },
  format: ['esm'],
  platform: 'node',
  treeshake: true,
  fixedExtension: false,
  sourcemap: false,
  clean: true,
})