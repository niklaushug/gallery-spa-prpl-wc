const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    'base': './src/js/base.js',
    'page-home': './src/js/page-home.js',
    'page-info': './src/js/page-info.js',
    'page-gallery': './src/js/page-gallery.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "." },
        { from: "src/galleryapp.webmanifest", to: "." },
        { from: "src/js/service-worker.js", to: "." },
        { from: "src/img/", to: "img/" },
        { from: "src/data/", to: "data/" },
      ],
    }),
  ],
};