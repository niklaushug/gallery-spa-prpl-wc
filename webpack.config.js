const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'base': './src/base.js',
    'page-home': './src/page-home.js',
    'page-info': './src/page-info.js',
    'page-gallery': './src/page-gallery.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};