'use strict';

var http = require('http');
var through = require('through')

function write (buf) { 
	this.queue(buf.toString().toUpperCase()) 
}
function end () { this.queue(null) }

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(write, end)).pipe(res);
    }
    res.end('beep boop\n');
});

server.listen(process.argv[2]);
