const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: __dirname + "/dist",
    publicPath: "",
    filename: "static/js/[name].[contenthash:5].js",
    chunkFilename: "static/js/vendors.[contenthash:5].js"
  },
  // minize js and css files
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        common: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  plugins: [
    // generate bundle analysis report
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false
    })
  ]
});
