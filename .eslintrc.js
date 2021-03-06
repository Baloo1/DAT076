module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "react/no-unescaped-entities": "off"
    },
    "settings": {
        "react": {
          "version": "latest"
        }
      }
};