const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('new user connection');
    socket.on('disconnect', () => {
        console.log('disconnect');
    })
})
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => { console.log(`server runing on port ${PORT}`) });