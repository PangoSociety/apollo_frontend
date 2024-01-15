// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true, node: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     "@typescript-eslint/no-namespace": "off"
//
//   },
// }

module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "tsconfig.json",
      }
    }
  },

  plugins: ['react'],
  rules: {
    "import/no-unresolved": "error",
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'class-methods-use-this': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off'
  },
};

// module.exports = {
//   "env": {
//     "browser": true,
//     "es2021": true,
//     "jest": true
//   },
//
//   "extends": [
//     "plugin:react/recommended",
//     "plugin:@typescript-eslint/recommended",
//     "prettier",
//     "plugin:prettier/recommended",
//     "plugin:import/recommended",
//     "airbnb"
//   ],
//   "overrides": [],
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },
//     "ecmaVersion": 12,
//     "sourceType": "module"
//   },
//   "plugins": [ "react", "@typescript-eslint", "react-hooks" ],
//   "rules": {
//     "no-use-before-define": "off",
//     "@typescript-eslint/no-use-before-define": [ "error" ],
//     "react/jsx-filename-extension": [ "warn", { "extensions": [ ".tsx" ] } ],
//     "import/extensions": [ "error", "ignorePackages", { "ts": "never", "tsx": "never" } ],
//     "no-shadow": "off",
//     "@typescript-eslint/no-shadow": [ "error" ],
//     "@typescript-eslint/explicit-function-return-type": [ "error", { "allowExpressions": true } ],
//     "max-len": [ "warn", { "code": 100, "ignoreComments": true, "ignoreUrls": true } ],
//     "react-hooks/rules-of-hooks": "error",
//     "react-hooks/exhaustive-deps": "warn",
//     "import/prefer-default-export": "off",
//     "react/prop-types": "off",
//     "prettier/prettier": [ "error", { "endOfLine": "auto" } ]
//   },
//   "settings": {
//     "import/resolver": {
//       "typescript": {}
//     }
//   }
// }