module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    "class-methods-use-this": 0,
    "react/jsx-props-no-spreading": [2, { html: "ignore" }],
    "@typescript-eslint/no-var-requires": [
      0,
      {
        devDependencies: ["**/jest.config.js/**"],
      },
    ],
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: [
          "**/__tests__/**",
          "**/__mocks__/**",
          "**/?(*.)(spec|test).js?(x)",
          "scripts/**",
        ],
      },
    ],
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
