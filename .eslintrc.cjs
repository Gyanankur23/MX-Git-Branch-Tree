// .eslintrc.cjs
module.exports = {
  root: true,
  env: { node: true, browser: true, es2021: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: { jsx: true }
  },
  plugins: ["react", "jsx-a11y", "import"],
  settings: { react: { version: "detect" } },
  rules: {}
};
