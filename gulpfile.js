var gulp = require('gulp');
var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')();
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  styles: {
    files: 'scss/**/*.scss'
  }
};

// Error notifications
var reportError = function(error) {
  $.notify({
    title: 'Gulp Task Error',
    message: 'Check the console.'
  }).write(error);
  console.log(error.toString());
  this.emit('end');
};

// Sass processing
gulp.task('sass', function() {
   gulp.src(paths.styles.files)
    .pipe($.sourcemaps.init())
    // Convert sass into css
    .pipe($.sass({
      outputStyle: 'compressed', // libsass doesn't support expanded yet
      precision: 10
    }))
    // Show errors
    .on('error', reportError)
    // Autoprefix properties
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    // Write sourcemaps
    .pipe($.sourcemaps.write({addComment: false}))
    // Save css
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});

// process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src('js/**/*.js')
    .pipe(gulp.dest('js'));
});

// JS hint
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.notify({
      title: "JS Hint",
      message: "JS Hint says all is good.",
      onLast: true
    }));
});

//BrowserSync
gulp.task('browser-sync', function() {
  //watch files
  var files = [
    'css/styles.css',
    'js/**/*.js',
    'images/**/*',
    '.html'
  ];
  //initialize browsersync
  browserSync.init({
         server: {
             baseDir: "./"
         }
     });
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
  gulp.watch("js/**/*.js", ['js']);
});
