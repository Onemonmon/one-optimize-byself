const { resolve } = require("path");
const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");

module.exports = merge(baseConfig, {
  devServer: {
    host: "localhost",
    port: 9000,
  },
  mode: "development",
});
