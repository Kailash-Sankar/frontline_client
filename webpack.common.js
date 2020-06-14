const path = require("path");

// removes old bundle fileds
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// creates index html file for entry, useful when scripts have hashed names
const HtmlWebpackPlugin = require("html-webpack-plugin");

// extract css out of js files
const CssExtractPlugin = require("extract-css-chunks-webpack-plugin");

// dev environment identifier
const is_dev = process.env.NODE_ENV === "development";

// regex to test for modules, loaderUtils is part of webpack dependencies
const cssModuleRegex = new RegExp(/\.module\.(less|css)$/);
const loaderUtils = require("loader-utils");

console.log("Node Environment", process.env.NODE_ENV);

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@components": path.resolve(__dirname, "./src/components/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@images": path.resolve(__dirname, "./src/images/"),
      "@store": path.resolve(__dirname, "./src/store/"),
      "@api": path.resolve(__dirname, "./src/api/"),
      "@mocks": path.resolve(__dirname, "./src/__mocks__/"),
    },
  },
  module: {
    rules: [
      // support for ES6 and linting
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"], // babel for ES6 syntax and eslint for js best practices
      },
      // parse and extract all less/css files
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: CssExtractPlugin.loader,
            options: { hot: is_dev, reloadAll: is_dev },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]___[hash:base64:5]",
                getLocalIdent: getLocalIdent,
              },
              localsConvention: "camelCaseOnly",
              importLoaders: 2,
            },
          },
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                paths: [
                  path.resolve(__dirname, "./src/styles"),
                  path.resolve(__dirname, "node_modules"),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(ttf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/fonts/",
              mimetype: "application/font-woff",
              publicPath: "../fonts/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CssExtractPlugin({
      filename: "static/css/[name].[contenthash:5].css",
      chunkFilename: "static/css/vendors.[contenthash:5].css",
    }),
  ],
};

// this is a copy of the default function, modified slightly to achieve our goal
// more here: https://stackoverflow.com/a/58190532/1878459
function getLocalIdent(loaderContext, localIdentName, localName, options) {
  // return original name if it's a global file
  if (!cssModuleRegex.test(loaderContext.resourcePath)) {
    return localName;
  }

  if (!options.context) {
    // eslint-disable-next-line no-param-reassign
    options.context = loaderContext.rootContext;
  }

  const request = path
    .relative(options.context, loaderContext.resourcePath)
    .replace(/\\/g, "/");

  // eslint-disable-next-line no-param-reassign
  options.content = `${options.hashPrefix + request}+${localName}`;

  // eslint-disable-next-line no-param-reassign
  localIdentName = localIdentName.replace(/\[local\]/gi, localName);

  const hash = loaderUtils.interpolateName(
    loaderContext,
    localIdentName,
    options
  );

  return hash
    .replace(new RegExp("[^a-zA-Z0-9\\-_\u00A0-\uFFFF]", "g"), "-")
    .replace(/^((-?[0-9])|--)/, "_$1");
}
