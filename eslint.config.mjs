import coreWebVitals from "eslint-config-next/core-web-vitals";
import next from "eslint-config-next";
import typescript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "docs/legacy/**"] },
  ...next,
  ...coreWebVitals,
  ...typescript,
];

export default eslintConfig;
