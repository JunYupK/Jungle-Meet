import React, { useState, useEffect } from "react";
function Chat() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
  }, []);
  useEffect(() => {
    if (socket) {
      console.log(socket);
      socket.onopen = () => {
        console.log("Websocket connected");
      };
      socket.onmessage = (event) => {
        console.log("Received Message: ", event.data);
      };
      socket.onclose = (event) => {
        console.log("Websocket is Closed");
      };
    }
  }, [socket]);
  const sendMessage = () => {
    if (socket) {
      socket.send("Hello, WebSocket!");
    }
  };
  return (
    <div>
      <button onClick={sendMessage}>sendMessage</button>
    </div>
  );
}
export default Chat;
