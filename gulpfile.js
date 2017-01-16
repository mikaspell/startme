var gulp = require('gulp'),
  pug = require('gulp-pug'),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  webserver = require('gulp-webserver'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  cleaner = require('rimraf'),
  sequence = require('gulp-sequence'),
  bower = require('main-bower-files'),
  path = {
    src: {
      html: 'resources/views/*.pug',
      css: 'resources/styles/style.scss',
      js: 'resources/scripts/*.js',
      img: 'resources/images/**/*.*'
    },
    watch: {
      html: 'resources/views/**/*.pug',
      css: 'resources/styles/**/*.scss',
      js: 'resources/scripts/*.js',
      img: 'resources/images/**/*.*'
    },
    build: {
      html: 'build/',
      css: 'build/css/',
      js: 'build/js/',
      img: 'build/img/'
    }
  };

// Запуск локального сервера
gulp.task('localserver', function() {
  gulp.src(path.build.html)
    .pipe(webserver({
      livereload: true,
      open: true,
      fallback: 'index.html'
    }));
});

// Чистка папки продакшена
gulp.task('clean', function (cb) {
  cleaner(path.build.html, cb);
});

// Запуск компиляции HTML
gulp.task('html', function() {
  gulp.src(path.src.html)
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.build.html));
});

// Запуск компиляции CSS
gulp.task('css', function() {
  gulp.src(path.src.css)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest(path.build.css));
});

// Сжатие javascript
gulp.task('js', function() {
  return gulp.src(path.src.js)
    .pipe(plumber())
    // .pipe(uglyjs())
    // .pipe(rename(function (path) {
    //   path.basename += ".min"
    // }))
    .pipe(gulp.dest(path.build.js));
});

// Сжатие изображений
gulp.task('image', function() {
  return gulp.src(path.src.img)
    .pipe(plumber())
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(path.build.img));
});

gulp.task('vendors', function() {
  var styles = gulp.src(bower({group: 'css'}))
    .pipe(plumber())
    .pipe(gulp.dest(path.build.css +'/vendors'));

  var scripts = gulp.src(bower({group: 'js'}))
    .pipe(plumber())
    .pipe(gulp.dest(path.build.js +'/vendors'));

  return [styles, scripts];
});

// Копирование файлов
gulp.task('copy', function () {
  gulp.src('./resources/fonts/**/*.{ttf,woff,woff2,eof,svg}')
    .pipe(gulp.dest('./build/fonts'))
});

// Наблюдение за изменением файлов
gulp.task('default', ['localserver'], function() {

  watch([path.watch.html], function(event, cb) {
    gulp.start('html');
  });
  watch([path.watch.css], function(event, cb) {
    gulp.start('css');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image');
  });
});

// Выполнение всех тасков по порядку
gulp.task('build', sequence('clean', ['html', 'css'], 'js', 'image', 'vendors', 'copy'));