//
// .eslintrc.js
//

const dev_rules = {
  "no-unused-vars": "off",
}

module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "plugins": [
    "react",
    "react-hooks",
    "html",
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2018
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "html/indent": "+2",
  },
  "rules": {
    ...(process.env.NODE_ENV === "production" ? {} : dev_rules),
    "linebreak-style": ["error", "unix"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "warn",
  }
};
