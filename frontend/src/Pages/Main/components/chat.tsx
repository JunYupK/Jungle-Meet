import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";
function Chat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const ws = io("http://localhost:4001", { transports: ["websocket"] });
    setSocket(ws);

    return () => {
      ws.disconnect();
    };
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
