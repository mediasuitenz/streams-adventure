'use strict';

var through = require('through');
var split = require('split');
var odd = true;

function write (buf) {
	var str = buf.toString()
	if (!odd) { 
		str = str.toUpperCase()
	} else {
		str = str.toLowerCase()
	}
	odd = !odd;
	this.queue(str + '\n')
}
function end () { 
	this.queue(null)
}

var tr = through(write, end);

process.stdin
	.pipe(split())
	.pipe(tr).pipe(process.stdout);
