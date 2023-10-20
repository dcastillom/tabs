module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  settings: {
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        "alias": {
          "@": "./src",
          "@components": "./src/components",
          "@contexts": "./src/contexts",
          "@services": "./src/services",
          "@hooks": "./src/hooks",
          "@translations": "./src/translations",
          "@constants": "./src/constants",
          "@regExp": "./src/regExp",
        },
        extensions: [".js", ".jsx"],
        packages: [
          "packages/*"
        ]
      }
    }
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/no-unresolved": ["error", { commonjs: true }],
    'prefer-destructuring': 'off',
    'no-restricted-syntax': 'off',
    'import/no-cycle': 'off',
    'jsx-a11y/anchor-is-valid': 0,
    'react/react-in-jsx-scope': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-useless-escape': 'off',
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@src/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
    files: [
        "**/*.test.jsx",
      ],
      env: {
        "jest": true
      }
    }
  ]
};
