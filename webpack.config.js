const webpack = require('webpack')
const path = require( 'path' );

module.exports = {
  // webpack optimization mode
  mode: 'development',
  entry: [
    './src/reactTextMask.js',
  ],

  // output files and chunks
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'index.js',
    library: 'reactTextMask',
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  
  
  // resolve files configuration
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  
  performance: {
    hints: false
  }
};
