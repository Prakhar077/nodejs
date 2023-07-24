const net = require('net');
let server = net.createServer((socket) => {
    socket.on('connect', () => {
        console.log('Connecting...');
    })
    socket.on('data', (data) => {
        console.log(data.toString());
    })
}).on('error', (err) => {
    console.error(err);
})
server.listen(8081, ()=> {
    console.log("Server started");
})