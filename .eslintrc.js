module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint-config-airbnb-base',
    'airbnb-base',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
};
