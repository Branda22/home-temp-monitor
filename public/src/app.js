$(function(window, $){
    var socket = io();
    socket.on('newTemp', function(data) {
        console.log(data);
    });
}(window, $));