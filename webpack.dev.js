const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    hot: true,
    disableHostCheck: true,
    port: 3000,
    proxy: [
      {
        context: ["/api"],
        target:
          "http://ec2-34-222-175-59.us-west-2.compute.amazonaws.com:34716/",
        secure: false,
        changeOrigin: true,
        logLevel: "debug",
      },
    ],
  },
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
});
