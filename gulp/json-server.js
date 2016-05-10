'use strict';

var path = require('path'),
    gulp = require('gulp'),
    conf = require('./conf'),
    jsonServer = require('gulp-json-srv'),
    serverJSON = jsonServer.start({
      data: 'db.json',
      port: 25000,
      baseUrl: '/api',
      deferredStart: true
    })
  ;

gulp.task('jsonServerStart',function(){
  serverJSON.start();
});

gulp.task('watchJSON',function(){
  gulp.watch(['db.json'],function(){
    serverJSON.reload();
  })
});

gulp.task('json-server',['jsonServerStart','watchJSON']);
