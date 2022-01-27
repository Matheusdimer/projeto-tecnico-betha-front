const webpack = require("webpack");
const path = require('path')

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: "assets",
              publicPath: "assets"
            }
          },
        ],
      }
    ]
  },
  plugins: [
  ],
  externals: {
    angular: 'angular',
  }
};
