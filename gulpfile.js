const
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  uncss = require('gulp-uncss'),
  htmlmin = require('gulp-htmlmin'),
  size = require('gulp-size'),
  sizereport = require('gulp-sizereport'),
  runSequence = require('run-sequence');

gulp.task('pack-js', function() {
  return gulp.src(['src/js/rolagem.js', 'src/js/ityped.js', 'src/js/contact_me.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('pack-css', function() {
  // Concatenando também todos os arquivos CSS
  return gulp.src(['src/css/style.css'])
    .pipe(concat('stylesheet.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', () =>
  gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
);

gulp.task('minify-html', function() {
  return gulp.src(['src/index.html', 'src/404.html'])
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('remove-unused-css', function() {
  return gulp.src('dist/css/stylesheet.css')
    .pipe(uncss({
      html: ['src/index.html']
    }))
    .pipe(gulp.dest('./dist/css/stylesheet.min.css'));
});

gulp.task('sizereport', function() {
  return gulp.src('./dist/**/*')
    .pipe(sizereport());
});

var filesToMove = [
  './src/robots.txt',
  './src/sitemap.xml',
];

gulp.task('move', function() {
  gulp.src(filesToMove)
    .pipe(gulp.dest('dist'));
  gulp.src('./src/mail/*')
    .pipe(gulp.dest('./dist/mail'));
});

gulp.task('watch', function() {
  gulp.watch(['src/js/rolagem.js', 'src/js/ityped.js', 'src/js/contact_me.js'], ['pack-js']);
  gulp.watch(['src/css/style.css'], ['pack-css']);
  gulp.watch(['src/img/**/*'], ['imagemin']);
  gulp.watch(['src/index.html', 'src/404.html'], ['minify-html']);
  gulp.watch(['dist/css/stylesheet.css'], ['remove-unused-css']);
});

gulp.task('default', function(done) {
  runSequence('pack-js', 'pack-css', 'imagemin', 'minify-html', 'remove-unused-css', 'move', 'sizereport', function() {
    done();
  });
});