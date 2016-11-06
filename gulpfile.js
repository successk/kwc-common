// Imports
const gulp = require("gulp");
var jsmin = require('gulp-jsmin');

/// Constants
const tasks = Object.freeze({
  build: "build"
});

const paths = Object.freeze({
  src: "src/*.js",
  build: ".",
});

gulp.task(tasks.build, () => {
  "use strict";
  gulp.src(paths.src)
    .pipe(jsmin())
    .pipe(gulp.dest(paths.build));
});