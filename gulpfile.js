// gulp
var gulp = require('gulp');

// plugins
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var clean = require('gulp-clean');
var watch = require('gulp-watch');

// tasks
gulp.task('lint', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function() {
    gulp.src('./dist/*')
        .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
      .pipe(concat('app.css'))
      .pipe(minifyCSS(opts))
      .pipe(gulp.dest('./dist/css/'))
});

gulp.task('minify-js', function() {
  gulp.src(['./app/**/*.js', '!./app/bower_components/**'])
      .pipe(concat('app.js'))
      //.pipe(uglify())
      .pipe(gulp.dest('./dist/js/'))
});

gulp.task('copy-bower-components', function () {
  gulp.src('./app/bower_components/**')
      .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./app/**/*.html')
      .pipe(gulp.dest('dist/'));
});

gulp.task('connect', function () {
  connect.server({
    //livereload: true,
    root: 'app/',
    port: 8082
  });
});

gulp.task('watch', function () {
    gulp.watch('app/*');
});

gulp.task('connectDist', function () {
  connect.server({
    //livereload: true,
    root: 'dist/',
    port: 8080
  });
});


// default task
gulp.task('default',
  ['lint', 'connect']
);
// build task
gulp.task('build',
  ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
);