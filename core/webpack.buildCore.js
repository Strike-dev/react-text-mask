var StatsPlugin = require('stats-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

module.exports = {
    // webpack optimization mode
  mode: 'production',
  entry: path.join(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'textMaskCore.js',
    library: 'textMaskCore',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js']
  }
}
