module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'comma-dangle': 'error',
    'eol-last': ['error', 'always'],
    'max-len': ['error', { code: 80, comments: 80 }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['warn', 'always'],
    'space-before-function-paren': ['error', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
