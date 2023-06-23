// create server express basic
const express = require('express');
const app = express();
const port = 3000;

// create server http
const http = require('http');
const server = http.createServer(app);

// create server socket.io
const io = require('socket.io')(server);

// create server mysql
