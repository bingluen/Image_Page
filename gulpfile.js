var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  rename: {
    "gulp-minify-css": 'minifyCSS'
  }
});


gulp.task('build', ['style', 'react']);


gulp.task('style', function() {
  gulp.src('./sass/')
    .pipe(plugins.changed('.sass-cache'))
    .pipe(plugins.compass())
    .pipe(plugins.minifyCSS());
});

gulp.task('react', function() {
  gulp.src('./component/*.jsx')
    .pipe(plugins.changed('.react-cache'))
    .pipe(plugins.react())
    .pipe(gulp.dest('.react-cache'))
    .pipe(plugins.uglify())
    .pipe(plugins.concat('bundle.js'))
    .pipe(gulp.dest('./js/'))
})
