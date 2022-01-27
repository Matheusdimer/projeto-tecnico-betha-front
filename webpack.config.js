const webpack = require("webpack");
const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
      "./src/js/app.js"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              root: path.resolve(__dirname, "src/assets"),
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
      allChunks: true
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    }),
  ],
  externals: {
    angular: 'angular',
  },
  devtool: '#eval-source-map'
};
