"use strict";

const gulp = require('gulp');
const nodemon = require('nodemon');

gulp.task('default', () => {
  nodemon({
    script: 'app.js',
    ext: 'js json'
  }).on('start', function () {
    console.log('SHIT has started');
  })
});