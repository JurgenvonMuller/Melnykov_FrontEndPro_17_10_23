const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

// Compile Sass
gulp.task('compileSass', () => {
  return gulp
    .src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

// Compile JS using Webpack-stream
gulp.task('compileJS', () => {
  return gulp
    .src('./src/js/script.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});

// Watch Sass and JS, and serve
gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
    browser: 'firefox',
  });

  gulp.watch('./src/scss/**/*.scss', gulp.series('compileSass'));
  gulp.watch('./src/js/**/*.js', gulp.series('compileJS'));
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('compileSass', 'compileJS', 'watch'));
