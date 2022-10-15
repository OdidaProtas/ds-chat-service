export function handleSocketConnection(socket:any) {
    console.log(socket.id)
    console.log(socket.rooms); // Set { <socket.id> }
    socket.join("room1");
    console.log(socket.rooms);
    if(socket.user){
        console.log(socket.user)
    }
}
