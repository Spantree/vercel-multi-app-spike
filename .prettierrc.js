module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^@spiderrockplatform/(.*)$', '^@/(.*)$', '^../(.*)$', '^[./]'],
  importOrderParserPlugins: ['jsx', 'typescript', 'decorators-legacy'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
