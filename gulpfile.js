"use strict";

const gulp = require('gulp');
const nodemon = require('nodemon');

gulp.task('default', () => {

  console.log(' - nodemon started -');
  nodemon({
    script: 'app.js',
    ext: 'js json'
  })
});