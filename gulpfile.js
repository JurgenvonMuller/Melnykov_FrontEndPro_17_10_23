// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const babel = require('gulp-babel');
// const browserSync = require('browser-sync').create();

// // Compile Sass
// gulp.task('compileSass', function() {
//   return gulp.src('./src/scss/main.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(browserSync.stream());
// });

// gulp.task('compileJS', function() {
//   return gulp.src('./src/js/**/*.js')
//     .pipe(babel({
//       presets: ['@babel/env']
//     }))
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(browserSync.stream());
// });



// // Watch Sass and JS, and serve
// gulp.task('watch', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//     browser: 'firefox'
//   });

//   gulp.watch('./src/scss/**/*.scss', gulp.series('compileSass'));
//   gulp.watch('./src/js/**/*.js', gulp.series('compileJS'));
//   gulp.watch('./*.html').on('change', browserSync.reload);
//   gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
// });

// // Default task
// gulp.task('default', gulp.series('compileSass', 'compileJS', 'watch'));


// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const webpack = require('webpack-stream');
// const browserSync = require('browser-sync').create();

// // Compile Sass
// gulp.task('compileSass', function() {
//   return gulp.src('./src/scss/main.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(browserSync.stream());
// });

// // Compile JS using Webpack-stream
// gulp.task('compileJS', function() {
//   return gulp.src('./src/js/main.js') // Обновленный путь к файлу JS
//     .pipe(webpack(require('./webpack.config.js'))) // Передаем конфигурацию Webpack
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(browserSync.stream());
// });

// // Watch Sass and JS, and serve
// gulp.task('watch', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//     browser: 'firefox'
//   });

//   gulp.watch('./src/scss/**/*.scss', gulp.series('compileSass'));
//   gulp.watch('./src/js/**/*.js', gulp.series('compileJS'));
//   gulp.watch('./*.html').on('change', browserSync.reload);
//   gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
// });

// // Default task
// gulp.task('default', gulp.series('compileSass', 'compileJS', 'watch'));


// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const webpack = require('webpack-stream'); // Импортируйте webpack-stream
// const browserSync = require('browser-sync').create();

// // Compile Sass
// gulp.task('compileSass', function() {
//   return gulp.src('./src/scss/main.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(browserSync.stream());
// });

// // Compile JS using Webpack-stream
// gulp.task('compileJS', function() {
//   return gulp.src('./src/js/script.js') // Обновленный путь к файлу JS
//     .pipe(webpack(require('./webpack.config.js'))) // Передаем конфигурацию Webpack
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(browserSync.stream());
// });

// // Watch Sass and JS, and serve
// gulp.task('watch', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//     browser: 'firefox'
//   });

//   gulp.watch('./src/scss/**/*.scss', gulp.series('compileSass'));
//   gulp.watch('./src/js/**/*.js', gulp.series('compileJS'));
//   gulp.watch('./*.html').on('change', browserSync.reload);
//   gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
// });

// // Default task
// gulp.task('default', gulp.series('compileSass', 'compileJS', 'watch'));


// const gulp = require('gulp');
// const sass = require('gulp-sass')(require('sass'));
// const webpack = require('webpack-stream');
// const ts = require('gulp-typescript');
// const browserSync = require('browser-sync').create();

// // Compile Sass
// gulp.task('compileSass', function() {
//   return gulp.src('./src/scss/main.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(browserSync.stream());
// });

// // Compile TypeScript using gulp-typescript
// gulp.task('compileTypeScript', function() {
//   const tsProject = ts.createProject('tsconfig.json');
//   return tsProject.src()
//     .pipe(tsProject())
//     .js.pipe(gulp.dest('./dist/js'))
//     .pipe(browserSync.stream());
// });

// // Compile JS using Webpack-stream
// gulp.task('compileJS', function() {
//   return gulp.src('./src/js/script.js')
//     .pipe(webpack(require('./webpack.config.js')))
//     .pipe(gulp.dest('./dist/js'))
//     .pipe(browserSync.stream());
// });

// // Watch Sass, TypeScript, and JS, and serve
// gulp.task('watch', function() {
//   browserSync.init({
//     server: {
//       baseDir: './'
//     },
//     browser: 'firefox'
//   });
//   gulp.watch('./src/ts/**/*.ts', gulp.series('compileTypeScript')).on('change', browserSync.reload);
//   // gulp.watch('./src/ts/**/*.ts', gulp.series('compileTypeScript')); // Добавлено

//   gulp.watch('./src/scss/**/*.scss', gulp.series('compileSass'));
//   gulp.watch('./src/js/**/*.js', gulp.series('compileJS'));
//   gulp.watch('./*.html').on('change', browserSync.reload);
//   gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
// });

// // Default task
// gulp.task('default', gulp.series('compileSass', 'compileTypeScript', 'compileJS', 'watch'));




const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');
const browserSync = require('browser-sync').create();

// Compile Sass
gulp.task('compileSass', function() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

// Compile TypeScript using gulp-typescript
// gulp.task('compileTypeScript', function() {
//   const tsProject = ts.createProject('tsconfig.json');
//   return tsProject.src()
//     .pipe(tsProject())
//     .js.pipe(gulp.dest('./dist/ts'))
//     .pipe(browserSync.stream());
// });

gulp.task('compileTypeScript', function() {
  const tsProject = ts.createProject('tsconfig.json');
  return tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest('./dist/js'))  // Обновлено
    .pipe(browserSync.stream());
});


// Watch Sass, TypeScript, and serve
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    browser: 'firefox'
  });

  gulp.watch('./src/scss/**/*.scss', gulp.series('compileSass'));
  gulp.watch('./src/ts/**/*.ts', gulp.series('compileTypeScript')); // Добавлено
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('compileSass', 'compileTypeScript', 'watch'));
