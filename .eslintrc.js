module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
};
