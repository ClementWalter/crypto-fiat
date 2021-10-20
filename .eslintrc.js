module.exports = {
  env: {
    browser: true,
    jest: true,
    webextensions: true,
  },
  extends: ["airbnb/base", "prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
};
