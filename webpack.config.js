const path = require('path');

module.exports = {
  mode:'production',
  entry:'./src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  watchOptions: {
    ignored: ['./**/*.js', 'node_modules']
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};