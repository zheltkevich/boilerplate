module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/base',
        // 'plugin:vue/vue3-essential',
        // 'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        'standard',
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'quote-props': ['error', 'consistent-as-needed'],
        'no-unused-vars': [
            'error',
            {
                // vars: 'all',
                // args: 'after-used',
                // ignoreRestSiblings: false,
                varsIgnorePattern: '_',
            },
        ],
        'space-before-function-paren': ['error', 'never'],

        // ========= Vue =========
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/comment-directive': ['error', {
            reportUnusedDisableDirectives: true,
        }],
        'vue/match-component-file-name': ['error', {
            extensions: ['vue'],
            shouldMatchCase: true,
        }],
        'vue/no-unused-properties': ['error', {
            groups: ['props', 'data', 'computed', 'methods', 'setup'],
        }],
    },
};
