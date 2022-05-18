import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['challenges/**/*.{js,ts}'],
  },
})