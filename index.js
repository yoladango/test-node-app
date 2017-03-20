/*var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');*/

/*var fs = require('fs');

var data = fs.readFileSync('input.txt');
console.log(data.toString());

fs.readFile('input.txt', function(err, data) {
	if (err) return console.error(err);
	console.log(data.toString());
});

console.log('Program ended');*/

/*var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log('connection successful');
	eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
	console.log('data received successfully');
	
});

eventEmitter.emit('connection');

console.log('Program ended');*/

/*var fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
	if (err) {
		return console.error(err);
	}
	console.log('Asynchronous read: ' + data.toString());
	
});
console.log('Asynchronous read: Program Ended');

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log('Synchronous read: ' + data.toString());

console.log('Synchronous read: Program Ended');*/

console.log(__filename);




