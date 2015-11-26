var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./app/index",
  output: {
    path: path.join(__dirname, 'dist/static'),
    publicPath: "/static/",
    filename: "bundle.js"
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        include: path.join(__dirname, "app"),
        query: {
          plugins: ["transform-runtime"],
          presets: ["stage-0", "es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("main.css")
  ],
  
};
//devtool: 'source-map'