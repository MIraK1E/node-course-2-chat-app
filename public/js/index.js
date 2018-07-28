var socket = io();

socket.on('connect', function() {
    console.log('Connected');
});

socket.on('disconnect', function() {
    console.log('Disconnected');
});
// custom method that recive data form emit and render
socket.on('newMessage', function(message) {
    console.log(message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

$("#message-form").on('submit', function (e) {
    e.preventDefault();
    
    socket.emit('createMessage', {
        form: 'User',
        text: $('[name=message]').val()
    }, function() {
        
    });
});