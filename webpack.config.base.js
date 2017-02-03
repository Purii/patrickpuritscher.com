const env = process.env.NODE_ENV;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const publicPath = 'static';

module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${publicPath}/bundle.js`,
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./app'),
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'app'),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        include: path.join(__dirname, 'app'),
        options: {
          minimize: true,
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('postcss-cssnext'),
                ],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    new ExtractTextPlugin(`${publicPath}/main.css`),
  ],
};
