'use strict';

let path = require('path');

let autoprefixer = require('autoprefixer');
let cssImport = require('postcss-import');
let cssNested = require('postcss-nested');
let cssVars = require('postcss-simple-vars');

let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ExtractCSS = new ExtractTextPlugin(1, 'styles/app.css');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './scripts/app.ts',
    styles: './styles/app.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.css$/,
        loader: ExtractCSS.extract('style', 'css!postcss')
      }
    ]
  },
  postcss: (webpack) => [
    cssImport({ addDependencyTo: webpack }),
    cssNested(),
    cssVars(),
    autoprefixer
  ],
  plugins: [ExtractCSS],
  watchOptions: {
    poll: true,
    aggregateTimeout: 1000
  }
};
