/**
 * rules: https://eslint.bootcss.com/docs/rules
 */
module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        jest: true,
    },

    plugins: ["@typescript-eslint"],
    extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
    globals: {
        BigInt: true,
        BigInt64Array: true,
        BigUint64Array: true,
        Float32Array: true,
        Float64Array: true,
        Int16Array: true,
        Int32Array: true,
        Int8Array: true,
        Uint16Array: true,
        Uint32Array: true,
        Uint8Array: true,
        Uint8ClampedArray: true,
    },

    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 6,
    },

    rules: {
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "comma-spacing": ["error", { before: false, after: true }],
        "array-bracket-spacing": ["error", "never"],
        "function-paren-newline": "off",
        "no-constant-condition": "off",
        "no-undef": "warn",
        "no-var": "warn",
        "no-unused-vars": "off",
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
    },
};
