module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // React first, then packages starting with a character
          ["^react$", "^[a-z]"],
          // Packages starting with `@`
          ["^@"],
          // Packages starting with `~`
          ["^~"],
          // Imports starting with `../`
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Imports starting with `./`
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports
          ["^.+\\.s?css$"],
          // Side effect imports
          ["^\\u0000"]
        ]
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
      }
    ],
    indent: ['error', 2],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': ['error', 'unix'],
    'react/prop-types': 'off',
  },

};
