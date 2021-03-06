const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: ["@babel/polyfill", "./src/index.js"],
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].[contenthash].bundle.js',
    publicPath: "https://maksershov.ru/gh-dash/"
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    modules: ["node_modules"],
    "alias": {
      "react": "preact/compat",
      "react-dom": "preact/compat"
    },
  },
  module: {
    rules: [
      {
        test: /\(.js|.jsx?$/,
        loader: require.resolve("babel-loader"),
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js"
              }
            }
          }
        ]
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            esModule: false
          }
        }]
      },
      {
        loader: require.resolve("file-loader"),
        exclude: [/\.(js|mjs|jsx|ts|tsx|jpe?g|png|gif|svg)$/, /\.html$/, /\.json$/, /\.css$/],
        options: {
          name: "static/media/[name].[hash:8].[ext]",
          esModule: false
          //   fix problem with img [object Module] in browser
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "assets", "index.html"),
      title: "GitHub Dashboard",
      favicon: path.join(__dirname, "src", "assets", "favicon.ico"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        keepClosingSlash: true,
        minifyURLs: true
      }
    }),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          unsafe: true,
          inline: true,
          passes: 2,
          keep_fargs: false
        },
        output: {
          beautify: false,
        },
      },
      parallel: true
    }),
    new MiniCssExtractPlugin()
  ]
};
