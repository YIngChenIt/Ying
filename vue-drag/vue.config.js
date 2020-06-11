const path = require("path")

module.exports = {
    devServer: {
      host: "localhost",
      port: "10200",
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      }
    },
    configureWebpack: {
        resolve: {
          alias: {
            "@": path.resolve(__dirname, "src"),
          },
        },
        output: {
          library: "VueDrag",
          libraryTarget: "umd",
          jsonpFunction: `webpackJsonp_VueDrag`,
        },
      },
  };
  