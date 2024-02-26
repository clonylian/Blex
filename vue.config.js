const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: {
        "/moon-server": {
          target: "https://xbotx.site/moon-server/",
          changeOrigin: true,
          ws: true,
          secure: false,
          pathRewrite: { "^/moon-server": "" },
        },
      },
    },
  },
});
