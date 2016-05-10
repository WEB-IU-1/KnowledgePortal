'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var jsonServer = require('gulp-json-srv');

var $ = require('gulp-load-plugins')();

gulp.task('json-server', function () {
  jsonServer.start({
    data: 'db.json',
    port: 25000
  });
});
