import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // src/i18n/messages.ts uses an anonymous default export.
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Must be last: turns off ESLint rules that conflict with Prettier.
  skipFormatting,
]);

export default eslintConfig;
