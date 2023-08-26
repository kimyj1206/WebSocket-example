const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 7071 });

// connected server -> client send
wss.on('connection', (ws) => {
  ws.send('connected');

  // client -> server data received
  ws.on('message', (messageFromClient) => {
    const message = JSON.parse(messageFromClient);
    console.log(message);
  });
});