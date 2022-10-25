module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin", "eslint-plugin-import"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  root: true,
  env: {
    es2020: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js", "libs/core/node_modules", "libs/core/dist"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "import/order": [
      "error",
      { groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"] },
    ],
  },
};
