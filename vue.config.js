const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave: false,
  outputDir: 'docs',
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Laravel Expansions',
    },
  },
})
