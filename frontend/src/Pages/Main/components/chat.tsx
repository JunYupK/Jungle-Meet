import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
function Chat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const ws = io("ws://localhost:8080");
    setSocket(ws);
  }, []);
  const sendMessage = () => {
    if (socket) {
      socket.emit("message", "hello, WebSocket");
    }
  };
  return (
    <div>
      <button onClick={sendMessage}>sendMessage</button>
    </div>
  );
}
export default Chat;
