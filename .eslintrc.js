module.exports = {
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  extends: [
    '@tencent/eslint-config-tencent',
    '@tencent/eslint-config-tencent/ts'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 0,
    'line-comment-position': ['error', { position: 'above' }],
    'max-statements': ['error', 80],
    'max-depth': ['error', 8],
    'max-len': ['error', { code: 500 }],
  }
};
