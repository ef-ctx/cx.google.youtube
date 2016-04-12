(function () {
  'use strict';

  var gulp = require('gulp'),
    rename = require('gulp-rename'),
    ts = require('gulp-typescript');

  function distBuild(appConfig) {
    return function () {
      var tsProject = ts.createProject(appConfig.typescript.tsconfig),
        files = appConfig.src.distTs.concat(appConfig.src.typings),
        result = gulp.src(files).pipe(ts(tsProject.options));

      return result.js
        .pipe(rename(function (path) {
            path.dirname = path.dirname.replace(/cx\.google\.youtube\/?/, '');
        }))
        .pipe(gulp.dest(appConfig.dist));
    };
  };

  exports.task = distBuild;
  exports.dependencies = [
    'karma'
  ];
}());
