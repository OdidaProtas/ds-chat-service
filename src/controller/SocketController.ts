export class SocketController {
  static handlePing(msg) {
    console.log(msg);
  }
  static handleConnection(socket) {
    socket.emit("ping", "hehe");
    socket.on("pong", (msg) => {
      console.log(msg);
    });
    console.log(socket.id);
    console.log(socket.rooms); // Set { <socket.id> }
    socket.join("room1");
    console.log(socket.rooms);
    if (socket.user) {
      console.log(socket.user);
    }
  }
}
