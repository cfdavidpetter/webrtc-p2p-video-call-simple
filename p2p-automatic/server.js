const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from the current directory
// index.html is a main page
app.use(express.static(__dirname));

// Store connected clients
const clients = new Map();

wss.on('connection', (ws) => {
  const clientId = Date.now().toString();
  clients.set(clientId, ws);

  console.log(`Client connected: ${clientId}`);

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log('message -> data:', data);
    
    // Broadcast the message to all other clients
    clients.forEach((client, id) => {
      if (id !== clientId && client.readyState === WebSocket.OPEN) {
        const msg = {
          type: data.type,
          sdp: data.sdp,
          candidate: data.candidate,
          id: id
        }
        console.log(`message -> send to client[${id}]`, msg);
        client.send(JSON.stringify(msg));
      }
    });
  });

  ws.on('close', () => {
    console.log(`Client disconnected: ${clientId}`);
    clients.delete(clientId);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 