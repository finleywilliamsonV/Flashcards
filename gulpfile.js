"use strict";

const gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglifyES = require('uglify-es'),
      rename = require('gulp-rename'),
      maps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify'),
      composer = require('gulp-uglify/composer'),
      pump = require('pump');

const nodemon = require('nodemon');

gulp.task('minifyScripts',()=> {
  
});

// default task
gulp.task('default', () => {

  console.log(' - nodemon started -');
  nodemon({
    script: 'app.js',
    ext: 'js json'
  })
});