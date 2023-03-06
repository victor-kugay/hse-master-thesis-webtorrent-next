const webpack = require('webpack');
const info = require('./package.json');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: createWebpackConfig,
}

function createWebpackConfig(config, context) {
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: '/polyfills/process-fast.js',
      Buffer: ['buffer', 'Buffer']
    }),
    new webpack.DefinePlugin({
      global: 'globalThis'
    })
  );
  
  if (!config.resolve) {
    config.resolve = {};
  }

  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }
  
  config.resolve.aliasFields = ['browser'];
  config.resolve.alias = {
    ...config.resolve.alias,
    ...info.browser,
    crypto: false,
    stream: 'readable-stream',
    path: 'path-browserify'
  }


  return {
    ...config,
  }
}