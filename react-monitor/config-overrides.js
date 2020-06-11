const path = require("path");

module.exports = {
  webpack: (config) => {
    config.output.library = `ReactMonitor`;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_ReactMonitor`;

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },

  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.disableHostCheck = true;
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      config.historyApiFallback = true;

      return config;
    };
  },
};