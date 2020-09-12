module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: ['plugin:react/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11
  },
  plugins: ['react'],
  rules: {}
}
