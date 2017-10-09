/**
 * Created by ∞◊»„»„ on 2017/10/9.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var coffee = require('gulp-coffee');
var minify = require('gulp-minify-css');
console.log(gulp)
gulp.task('js',function(){
    gulp.src('./js/*.js')
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./js'))
})
gulp.task('css',function(){
    gulp.src('./css/*.css')
        .pipe(sourcemaps.init())
        .pipe(coffee())
        .pipe(minify())
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
})
