# WebRTC P2P Automatic Video Call System

A peer-to-peer video call implementation using WebRTC technology with automatic signaling through a WebSocket server. This system allows users to establish direct video call connections automatically without manual intervention.

## Overview

This implementation uses WebRTC (Web Real-Time Communication) to establish direct peer-to-peer connections between browsers. Unlike manual implementations, this version uses a WebSocket server for automatic signaling, making the connection process seamless and user-friendly.

## Features

- Automatic peer discovery and connection
- Real-time video and audio streaming
- WebSocket-based signaling server
- Automatic ICE candidate handling
- Connection status monitoring
- Simple and intuitive user interface

## Technical Architecture

### Components

1. **WebRTC Client**
   - Handles peer-to-peer video/audio streaming
   - Manages local and remote media streams
   - Implements ICE candidate gathering and exchange
   - Uses Google's STUN server for NAT traversal

2. **WebSocket Signaling Server**
   - Manages client connections
   - Facilitates automatic signaling between peers
   - Handles offer/answer exchange
   - Broadcasts ICE candidates

### Connection Process

1. **Initial Setup**
   - Client connects to WebSocket server
   - Camera and microphone permissions are requested
   - Local video stream is displayed

2. **Automatic Signaling**
   - First peer creates and sends an offer
   - Second peer receives offer and creates answer
   - ICE candidates are exchanged automatically
   - Connection is established when both peers are ready

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Modern web browser with WebRTC support
- Camera and microphone access
- Internet connection

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in two different browsers or devices

## Usage

1. Open the application in two different browsers or devices
2. Allow camera and microphone access when prompted
3. The connection will be established automatically
4. Once connected, you should see and hear the other person
