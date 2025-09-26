module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      plugins: ['@vitest'],
      extends: ['plugin:@vitest/legacy-recommended']
    }
  ]
}
