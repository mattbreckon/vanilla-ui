module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'airbnb-base',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'indent': ['error', 2, { SwitchCase: 1 }],
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    'prefer-rest-params': 0,
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    }
  ]
};
