import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const compiler = webpack(config);

/**
 * Require Browsersync along with webpack and middleware for it
 */
import webpackDevMiddleware from 'webpack-dev-middleware';
import stripAnsi from 'strip-ansi';
import bs from 'browser-sync';

const browserSync = bs.create();

/**
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
compiler.plugin('done', function (stats) {
  if (stats.hasErrors() || stats.hasWarnings()) {
    return browserSync.sockets.emit('fullscreen:message', {
      title: 'Webpack Error:',
      body: stripAnsi(stats.toString()),
      timeout: 100000
    });
  }
  browserSync.reload();
});

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
  server: { baseDir: ['src'] },
  // open: false,
  open: true,
  logFileChanges: false,
  middleware: [
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
      noInfo: true
      // stats: { colors: true }
    })
  ],
  plugins: ['bs-fullscreen-message'],
  files: ['./src/*.html', './src/*.scss']
});
