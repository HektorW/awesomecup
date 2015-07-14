var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');


gulp.task('default', ['webpack-dev-server']);



gulp.task('webpack-dev-server', function(callback) {
  var config = Object.create(webpackConfig);

  config.debug = true;

  new WebpackDevServer(webpack(config), {
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function(err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});