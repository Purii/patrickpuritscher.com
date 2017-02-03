const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');


baseConfig.devtool = 'cheap-module-eval-source-map';

baseConfig.plugins.push(
  new HtmlWebpackPlugin({
    template: './app/index.html',
    inject: true,
  })
);

module.exports = baseConfig;
