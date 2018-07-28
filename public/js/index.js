var socket = io();

socket.on('connect', function() {
    console.log('Connected');
});

socket.on('disconnect', function() {
    console.log('Disconnected');
});

socket.on('newMessage', function(message) {
    console.log(message);
})
// custom method that recive data form emit and render
// socket.on('newEmail', function(email) {
//     console.log('New Email', email);
// });