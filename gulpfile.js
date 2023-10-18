const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

// Compile Sass
gulp.task('compileSass', function() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('compileJS', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});



// Watch Sass and JS, and serve
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    browser: 'firefox'
  });

  gulp.watch('./src/scss/**/*.scss', gulp.series('compileSass'));
  gulp.watch('./src/js/**/*.js', gulp.series('compileJS'));
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('compileSass', 'compileJS', 'watch'));
