import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/README.md", "public/~partytown/*",".next"],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "next/core-web-vitals",
    "plugin:import/recommended",
    "prettier",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        parser: tsParser,
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "no-console": "error",
        "no-nested-ternary": "error",

        "react/jsx-curly-brace-presence": ["error", {
            props: "always",
            children: "never",
        }],

        "react/prop-types": "off",
        "react/jsx-curly-spacing": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/no-array-index-key": "warn",
        "react/boolean-prop-naming": "error",

        "react/display-name": ["off", {
            ignoreTranspilerName: true,
        }],

        "react/destructuring-assignment": ["error", "always"],
        "react/jsx-boolean-value": "error",
        "react/jsx-fragments": ["error", "element"],
        "react/jsx-handler-names": "error",

        "react/jsx-sort-props": [2, {
            callbacksLast: true,
            multiline: "last",
            noSortAlphabetically: false,
        }],

        "import/no-restricted-paths": ["error", {
            zones: [{
                target: "src/processes",
                from: "src/application",
            }, {
                target: "src/processes/*/**/*",
                from: "src/processes/*/index.ts",
            }, {
                target: "src/views",
                from: "src/application",
            }, {
                target: "src/views",
                from: "src/processes",
            }, {
                target: "src/views/*/**/*",
                from: "src/views/*/index.ts",
            }, {
                target: "src/widgets",
                from: "src/application",
            }, {
                target: "src/widgets",
                from: "src/processes",
            }, {
                target: "src/widgets",
                from: "src/views",
            }, {
                target: "src/widgets/*/**/*",
                from: "src/widgets/*/index.ts",
            }, {
                target: "src/features",
                from: "src/application",
            }, {
                target: "src/features",
                from: "src/processes",
            }, {
                target: "src/features",
                from: "src/views",
            }, {
                target: "src/features",
                from: "src/widgets",
            }, {
                target: "src/features/*/**/*",
                from: "src/features/*/index.ts",
            }, {
                target: "src/entities",
                from: "src/application",
            }, {
                target: "src/entities",
                from: "src/processes",
            }, {
                target: "src/entities",
                from: "src/views",
            }, {
                target: "src/entities",
                from: "src/widgets",
            }, {
                target: "src/entities",
                from: "src/features",
            }, {
                target: "src/entities/*/**/*",
                from: "src/entities/*/index.ts",
            }, {
                target: "src/shared",
                from: "src/application",
            }, {
                target: "src/shared",
                from: "src/processes",
            }, {
                target: "src/shared",
                from: "src/views",
            }, {
                target: "src/shared",
                from: "src/widgets",
            }, {
                target: "src/shared",
                from: "src/features",
            }, {
                target: "src/shared",
                from: "src/entities",
            }],
        }],

        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",

        "@typescript-eslint/no-unused-vars": ["warn", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
        }],

        "simple-import-sort/imports": ["error", {
            groups: [
                ["^react"],
                ["^next"],
                ["^@*"],
                ["^@application"],
                ["^@views"],
                ["^@widgets"],
                ["^@features"],
                ["^@entities"],
                ["^@shared"],
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                ["^.+\\.?(css)$"],
            ],
        }],

        "simple-import-sort/exports": "error",
    },
}];