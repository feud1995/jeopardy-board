module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "unused-imports", "import"],
    rules: {
        "unused-imports/no-unused-imports": "error",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
    overrides: [
        {
            files: ["**/*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off"
            },
        },
    ],
};
