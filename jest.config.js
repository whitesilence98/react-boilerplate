const {pathsToModuleNameMapper} = require("ts-jest");
const {compilerOptions} = require("./tsconfig.paths.json");

module.exports = {
   preset: "ts-jest",
   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
   testEnvironment: "node",
   moduleNameMapper: {
      "\\.scss$": "identity-obj-proxy",
      ...pathsToModuleNameMapper(
         compilerOptions.paths || {},
         // {prefix: "<rootDir>/"}
      ),
   },
   collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
   roots: ["<rootDir>"],
   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
   transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
   },
};
