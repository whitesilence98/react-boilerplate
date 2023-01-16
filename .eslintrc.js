module.exports = {
   root: true,
   parser: "@typescript-eslint/parser",
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
         jsx: true,
      },
   },
   settings: {
      react: {
         version: "detect",
      },
   },
   env: {
      browser: true,
      amd: true,
      node: true,
   },
   plugins: ["simple-import-sort"],
   extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended",
   ],
   rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "no-empty": [true, "allow-empty-functions", "allow-empty-catch"],
      //ts
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/explicit-module-boundary-types": "off",
      //Sort
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
      "simple-import-sort/exports": "warn",
      "simple-import-sort/imports": [
         "warn",
         {
            groups: [
               ["^react", "^@?\\w"], // ext library & side effect imports
               ["^\\u0000"], //
               ["^.+\\.s?css$"], // {s}css files
               ["^@hooks"], // hooks file
               ["^@constants"], // static file
               ["^@components"], // component file
               ["^@"], // other files
               [
                  "^\\./?$",
                  "^\\.(?!/?$)",
                  "^\\.\\./?$",
                  "^\\.\\.(?!/?$)",
                  "^\\.\\./\\.\\./?$",
                  "^\\.\\./\\.\\.(?!/?$)",
                  "^\\.\\./\\.\\./\\.\\./?$",
                  "^\\.\\./\\.\\./\\.\\.(?!/?$)",
               ], // relative paths up until 3 level
               ["^"], // other that didnt fit in
            ],
         },
      ],
   },
};
