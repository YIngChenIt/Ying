const path = require("path")

module.exports = {
    productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
    devServer: {
      host: "localhost",
      port: "8082",
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      }
    }
  };
  