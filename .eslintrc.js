module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import', 'html'],
  rules: {
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'no-undersonre-dangle': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'comma-dangle': ['error', 'never'],
    camelcase: 0,
    'arrow-body-style': 0,
    'no-shadow': 0,
    'no-unused-vars': 0
  }
};
