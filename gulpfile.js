var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  rename: {
    "gulp-minify-css": 'minifyCSS'
  }
});

paths = {
  scss: ['./sass/**/*.scss'],
  js: ['./js-src/**/*.js']
}


gulp.task('build', ['style', 'js']);

gulp.task('style', function() {
  gulp.src('./sass/')
    .pipe(plugins.changed('.sass-cache'))
    .pipe(plugins.compass())
    .pipe(plugins.minifyCSS());
});

gulp.task('js', function() {
  gulp.src(paths.js)
    .pipe(plugins.uglifyjs('main.min.js'))
    .pipe(gulp.dest('./js/'))
});


gulp.task('watch', function() {
  gulp.watch(paths.scss, ['style']);
  gulp.watch(paths.js, ['js']);
});
