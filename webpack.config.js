const webpack = require('webpack')
const path = require( 'path' );

module.exports = {
  // webpack optimization mode
  mode: 'production',
  entry: [
    './src/reactTextMask.js',
  ],

  // output files and chunks
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'reactTextMask.js',
    library: 'reactTextMask',
    // libraryTarget: 'umd'
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
