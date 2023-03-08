import React, { useState, useEffect } from "react";
function Chat() {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:4000");
    newSocket.addEventListener("open", (event) => {
      console.log("Websocket Connect");
    });
    newSocket.addEventListener("message", (e) => {
      const msg = JSON.parse(e.data);
      console.log(msg);
    });
    newSocket.addEventListener("error", (e) => {
      console.error("WebSocket Error", e);
    });
    newSocket.addEventListener("close", (e) => {
      console.log("WebScoket is disconnected");
    });
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);
}
