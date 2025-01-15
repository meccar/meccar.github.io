module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'boundaries'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          {
            from: '@Domain/*',
            disallow: ['@Application/**/*', '@Infrastructure/*', '@Presentation/*', '@DbMigrator/*', '@Persistance/*'],
          },
          {
            from: '@Application/*',
            disallow: ['@Infrastructure/*', '@Presentation/*'],
          },
          {
            from: '@Presentation/*',
            disallow: ['@Infrastructure/*'],
          },
        ],
      }
    ],
  },
  settings: {
    boundaries: {
      elements: [
        { type: 'domain', pattern: '@Domain/*' },
        { type: 'application', pattern: '@Application/*' },
        { type: 'infrastructure', pattern: '@Infrastructure/*' },
        { type: 'presentation', pattern: '@Presentation/*' },
        { type: 'db-migrator', pattern: '@DbMigrator/*' },
        { type: 'persistence', pattern: '@Persistance/*' },
      ],
      defaultMessage: 'Layer violation detected. Check the rules in .eslintrc.js.',
      ignore: ['**/node_modules/**'],
    },
  },
};
