'use strict';

var trumpet = require('trumpet');
var through = require('through');

var tr = trumpet();

var stream = tr.select('.loud').createStream();

var toUpper = through(function write(data) {
  this.queue(data.toString().toUpperCase());
})

process.stdin.pipe(tr).pipe(process.stdout);

stream.pipe(toUpper).pipe(stream);
