
module.exports = {
  extends: [
    'eslint-config-whalemare',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-quotes': ['warn', 'prefer-single'],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': ['warn', {
      forbid: [
        { char: '>', alternatives: ['&gt;'] },
        { char: '}', alternatives: ['&#125;'] },
      ]
    }],
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/display-name': 'off',
    'react/no-set-state': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-redundant-should-component-update': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-fragments': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
        callbacksLast: true,
      },
    ],
    'react/jsx-no-bind': ['off'],
  }
}
