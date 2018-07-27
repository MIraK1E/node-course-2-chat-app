var socket = io();

socket.on('connect', function() {
    console.log('Connected');

    socket.emit('createMessage', {
        to: 'Mike',
        text: 'Hey pls take your GTR back'
    });
});

socket.on('newMessage', function(message) {
    console.log(message);
});

socket.on('disconnect', function() {
    console.log('Disconnected');
});
// custom method that recive data form emit and render
// socket.on('newEmail', function(email) {
//     console.log('New Email', email);
// });