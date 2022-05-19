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
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  
  
  // resolve files configuration
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  
  performance: {
    hints: false
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
};
