
module.exports = {
  cache: true,
  entry: './src/main.js',
  output: {
    path: 'dev/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  devtool: 'sourcemap'
};
