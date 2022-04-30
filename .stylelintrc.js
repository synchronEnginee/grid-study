module.exports = {
    extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    ],
    plugins: [
    'stylelint-order',
    ],
    ignoreFiles: [
    '**/node_modules/**',
    ],
    rules: {
    'string-quotes': 'single',
    "color-function-notation": "legacy",
    'scss/at-import-partial-extension': ['always', , { "except": ["scss"] }]
    },
};
