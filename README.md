
# ESLint configuration

```js
// .eslintrc.js
module.exports = {
  extends: ['eslint-config-whalemare'],
  overrides: [
    {
      files: ['src/**/*.ts'],
      extends: ['eslint-config-whalemare/react'],
    },
  ],
}
```

# Install deps
```
yarn add --dev -E "@react-native-community/eslint-config" "@typescript-eslint/eslint-plugin" "@typescript-eslint/experimental-utils" "@typescript-eslint/parser" "@typescript-eslint/typescript-estree" "eslint-config-prettier" "eslint-plugin-i18n" "eslint-plugin-import" "eslint-plugin-jest" "eslint-plugin-prettier" "eslint-plugin-react" "eslint-plugin-react-hooks" "eslint-plugin-unused-imports" "prettier"
```