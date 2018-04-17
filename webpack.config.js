const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: path.join(APP_DIR, '/index.jsx'),

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'static index.html', template: path.join(APP_DIR, 'index.html') }), //serve index.html
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: BUILD_DIR
  }
};

module.exports = config;