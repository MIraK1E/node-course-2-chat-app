const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public');

const app = express();
const server = http.createServer(app);
// create web socket server
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.on('createMessage', (message) => {
        console.log('created message', message);
    });

    socket.emit('newMessage', { text: 'Buy me some COCO' });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
    // emit mean action the event and send data to another side
    // socket.emit('newEmail', {
    //     form: 'mike@exaple.com',
    //     text: 'Hey. what is going on',
    //     createdAt: 123
    // });
});

app.get('/', (req, res) => {
    res.render('index.html');
});

server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

