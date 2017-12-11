'use strict';

const express = require('express');
const app = new express();
const logger = require('winston');

app.get('/', function(request, response) {
	logger.info('Request to /');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World!');
});

app.listen(8081, function() {
	logger.info('Server running at http://127.0.0.1:8081/');
});
