(function () {
    'use strict';

    var gulp = require('gulp');

    function d3fault(appConfig) {
        return function () {
            gulp.start('karma');
            gulp.start('example');
        };
    };

    exports.task = d3fault;
    exports.dependencies = [];
}());