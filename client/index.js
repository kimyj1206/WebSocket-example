const ws = new WebSocket('ws://localhost:7071/ws');

// server -> client data received
ws.onmessage = (webSocketMessage) => {
  console.log(webSocketMessage);
  console.log(webSocketMessage.data);
}

// client -> server send
document.body.onmousemove = (event) => {
  const messageBody = {
    x: event.clientX,
    y: event.clientY
  }
  ws.send(JSON.stringify(messageBody));
}