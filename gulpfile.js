var path = require('path');
var gulp = require('gulp');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var compass = require('gulp-compass');
var uglifyjs = require('gulp-uglifyjs');
var minifyCSS = require('gulp-minify-css');
var browserify = require('gulp-browserify');
var react = require('gulp-react');
var gulpCopy = require('gulp-copy');

var paths = {
  sass: ['./sass/'],
  reactComponent: ['./component/**/*.jsx'],
  jsSrc: './js-src/*.js'
}

gulp.task('style', function() {
  gulp.src(paths.sass)
    .pipe(changed('.sass-cache'))
    .pipe(compass({
      project: path.join(__dirname),
      css: 'css',
      sass: 'sass'
    }))
});

gulp.task('react', function() {
  gulp.src(paths.reactComponent)
    .pipe(react())
    .pipe(gulp.dest('./js-src/component/'))
})

gulp.task('browserify', function() {
  gulp.src(paths.jsSrc)
    .pipe(browserify())
    .pipe(uglifyjs())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./js/'))
});

gulp.task('outputFile', function() {
  var fileList = {
    images: 'img/**/**.**',
    js: [
      'js/jquery-2.1.4.min.js',
      'js/main.min.js',
      'js/react-0.13.3.js',
      'js/scrollit.js',
      'js/semantic.min.js',
      'js/swiper.min.js'
    ],
    css: [
      'css/**/**.css',
      'themes/**/**.**'
    ],
    html: [
      'index.html'
    ]
  }

  //bundle file
  for (fileType in fileList) {
    gulp.src(fileList[fileType])
      .pipe(gulpCopy('bundle/'))
    ;
  }

})

gulp.task('build', ['style', 'react', 'browserify', 'outputFile'])
