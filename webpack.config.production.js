const HtmlWebpackPlugin = require('html-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');

const renderToStatic = process.env.RENDERTOSTATIC;
const baseConfig = require('./webpack.config.base.js');

// Compress JS
baseConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compress: {
      dead_code: true,
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      warnings: false,
    },
  })
);

// More compression
baseConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  })
);


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
  // Use normal index.html as template
  baseConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: './app/index.html', // Move the index.html file...
      minify: { // Minifying it while it is parsed
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true, // inject all files that are generated by webpack, e.g. bundle.js, main.css with the correct HTML tags
    })
  );
}

module.exports = baseConfig;