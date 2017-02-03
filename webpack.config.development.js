const HtmlWebpackPlugin = require('html-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const baseConfig = require('./webpack.config.base.js');

const renderToStatic = process.env.RENDERTOSTATIC;

baseConfig.devtool = 'cheap-module-eval-source-map';

if (renderToStatic) {
  // StaticSiteGeneratorPlugin needs different entrypoint
  baseConfig.entry = {
    main: './app/index.static.js',
  };

  // StaticSiteGeneratorPlugin need that type
  baseConfig.output.libraryTarget = 'umd';

  // Run StaticSiteGeneratorPlugin
  baseConfig.plugins.push(
    new StaticSiteGeneratorPlugin('main', [
      '/index.html',
    ], {})
    );

  // Not static
} else {
  baseConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true,
    })
    );
}

module.exports = baseConfig;
