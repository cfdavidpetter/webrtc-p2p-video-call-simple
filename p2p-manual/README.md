# Simple WebRTC P2P Video Call System

A simple peer-to-peer video call implementation using WebRTC technology. This system allows two users to establish a direct video call connection by manually exchanging connection information.

## How It Works

### Overview
This implementation uses WebRTC (Web Real-Time Communication) to establish a direct peer-to-peer connection between two browsers. The connection is established through a manual signaling process where users copy and paste connection information.

### Components
- Two video elements: one for local video (your camera) and one for remote video (other person's camera)
- Three main buttons for the signaling process
- A text area for exchanging connection information

### Connection Process

1. **Initial Setup**
   - Both users open the webpage in their browsers
   - The system automatically requests camera and microphone permissions
   - Each user sees their own video feed immediately

2. **User A (Initiator)**
   - Clicks "Create Offer (User A)"
   - The system generates an offer containing connection information
   - The offer appears in the text area
   - User A copies this information

3. **User B (Receiver)**
   - Pastes User A's offer into the text area
   - Clicks "Create Answer (User B)"
   - The system generates an answer
   - The answer appears in the text area
   - User B copies this answer

4. **Final Connection**
   - User A pastes User B's answer into the text area
   - Clicks "Insert Other's Code"
   - The connection is established
   - Both users can now see and hear each other

### Technical Details

- Uses Google's STUN server (`stun:stun.l.google.com:19302`) for NAT traversal
- Implements the WebRTC signaling process manually
- Handles ICE (Interactive Connectivity Establishment) candidates automatically
- Supports both video and audio streams
- Uses modern WebRTC APIs for peer connection management

## Usage

1. Open `index.html` in two different browsers or devices
2. Allow camera and microphone access when prompted
3. Follow the connection process as described above
4. Once connected, you should see and hear the other person

## Requirements

- Modern web browser with WebRTC support (Chrome, Firefox, Safari, Edge)
- Camera and microphone access
- Internet connection
- Two devices or browser instances for testing

## Security Considerations

- The connection is peer-to-peer and encrypted
- No media data passes through any server
- Only the initial connection information is exchanged manually
- Uses secure WebRTC protocols for media transmission

## Limitations

- Manual signaling process (requires copying and pasting)
- No built-in error handling for failed connections
- No reconnection mechanism
- Basic UI without additional features like chat or screen sharing
