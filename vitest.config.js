import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['test/**/*.js'],
    exclude: ['test/_mocks/**/*.js', 'test/lib/**/*.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov']
    }
  }
})
