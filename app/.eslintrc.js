module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'semi': [2, 'always'],
    'quotes': [2, 'single', { 'avoidEscape': true }],

    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};
