const socket = io();
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { client: 'this message came through socket.io' });
});
