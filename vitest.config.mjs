import tsconfigPaths from 'vite-tsconfig-paths'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    reporters: ['verbose'],
    env: {
      TZ: 'Asia/Bangkok',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: [...coverageConfigDefaults.exclude, 'src/tests/**', 'dist/**'],
    },
  },
})
