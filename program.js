'use strict';

var concat = require('concat-stream');

function reverse(s){
    return s.split("").reverse().join("");
}

process.stdin
	.pipe(concat(function (buf) {
		var str = reverse(buf.toString())
		console.log(str)
	}))
