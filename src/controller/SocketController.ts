export function handleSocketConnection(socket: any) {
  console.log(
    "snmkdkbffhjj \n\n\n\n\n\n\n\n\n\\n\n\n\nnn\n\n\\\n\n\nn\n\n\n\n"
  );
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
