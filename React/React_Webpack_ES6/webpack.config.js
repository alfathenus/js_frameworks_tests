var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app/');

var config = {
  devtool: 'source-map',
  entry: APP_DIR + '/js/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'js/index.js',
    publicPath: ''
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: APP_DIR + "/index.tmpl.html"
    })
  ],
};

module.exports = config;