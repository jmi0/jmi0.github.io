/**
 * @Author: Joe Iannone <josephiannone>
 * @Date:   2020-03-29T21:59:34-04:00
 * @Filename: Gulpfile.js
 * @Last modified by:   josephiannone
 * @Last modified time: 2020-03-29T22:11:05-04:00
 */



const gulp = require("gulp");
const minify = require("gulp-minify");
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');

gulp.task('watch', () => {
  gulp.watch('./css/*.css', gulp.series('minifycss'));
  gulp.watch('js/*.js', gulp.series('minifyjs'));
  gulp.watch('./scss/*.scss',gulp.series('sass'));
  gulp.watch('./img/*', gulp.series('image'));
});

gulp.task('sass', () => {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('minifyjs', () => {
  return gulp.src('./js/*.js')
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('minifycss', () => {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(minify())
    .pipe(gulp.dest('./dist/css'))
});

gulp.task('image', () => {
  gulp.src('./img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
});
