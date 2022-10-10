module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx']}],
    'react/react-in-jsx-scope': 'off',
  },
};
