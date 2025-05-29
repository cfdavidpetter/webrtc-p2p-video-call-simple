const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Store rooms and their clients
const rooms = new Map();

wss.on('connection', (ws, req) => {
  // Get room code from URL query parameters
  const url = new URL(req.url, 'ws://localhost');
  const roomCode = url.searchParams.get('room');
  
  if (!roomCode) {
    ws.close(1008, 'Room code is required');
    return;
  }

  const clientId = Date.now().toString();
  
  // Create room if it doesn't exist
  if (!rooms.has(roomCode)) {
    rooms.set(roomCode, new Map());
  }
  
  // Add client to room
  rooms.get(roomCode).set(clientId, ws);

  console.log(`Client ${clientId} connected to room: ${roomCode}`);

  // Send current room size to the new client
  const roomSize = rooms.get(roomCode).size;
  ws.send(JSON.stringify({
    type: 'room_info',
    roomSize: roomSize,
    roomCode: roomCode
  }));

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log('message -> data:', data);
    
    // Broadcast the message only to clients in the same room
    const roomClients = rooms.get(roomCode);
    if (roomClients) {
      roomClients.forEach((client, id) => {
        if (id !== clientId && client.readyState === WebSocket.OPEN) {
          const msg = {
            type: data.type,
            sdp: data.sdp,
            candidate: data.candidate,
            id: id
          }
          console.log(`message -> send to client[${id}] in room[${roomCode}]`, msg);
          client.send(JSON.stringify(msg));
        }
      });
    }
  });

  ws.on('close', () => {
    console.log(`Client ${clientId} disconnected from room: ${roomCode}`);
    
    // Remove client from room
    const roomClients = rooms.get(roomCode);
    if (roomClients) {
      roomClients.delete(clientId);
      
      // If room is empty, delete it
      if (roomClients.size === 0) {
        rooms.delete(roomCode);
        console.log(`Room ${roomCode} deleted (empty)`);
      }
    }
  });
});

// Ensure WS_PORT is properly parsed as a number
const PORT = parseInt(process.env.WS_PORT) || 3000;
server.listen(PORT, () => {
  console.log(`WebSocket Server is running on port ${PORT}`);
}); 