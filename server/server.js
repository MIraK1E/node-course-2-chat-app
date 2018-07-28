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

    socket.emit('newMessage', { message: 'Welcome to the chat app' });

    // send to all connected user except for the one who join
    socket.broadcast.emit('newMessage', { 
        from: 'admin', 
        text: 'New User Join',
        createdAt: new Date().getTime() 
    });

    socket.on('createMessage', (message) => {
        console.log('created message', message);
        io.emit('newMessage', {
            from: message.form,
            text: message.text,
            createdAt: new Date().getTime()
        });
        
        // socket.broadcast.emit('newMessage', {
        //     from: message.form,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('client disconnected');
    });
});

app.get('/', (req, res) => {
    res.render('index.html');
});

server.listen(port, () => {
    console.log(`server is up on port ${port}`);
});

