const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: false,
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/scss/custom.scss";`,
      },
    },
  },
})
