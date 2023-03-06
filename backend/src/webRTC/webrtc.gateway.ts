import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import SimplePeer from 'simple-peer';

@WebSocketGateway()
export class WebRTCGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private peer: SimplePeer.Instance;

  afterInit(server: Server) {
    console.log('WebRTC gateway initialized');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('WebRTC client connected');
  }

  handleDisconnect(client: any) {
    console.log('WebRTC client disconnected');
  }

  @SubscribeMessage('signal')
  onSignal(client: any, data: any) {
    console.log('WebRTC signal received');

    if (!this.peer) {
      this.peer = new SimplePeer({ initiator: true });
      this.peer.on('signal', (signal: any) => {
        client.emit('signal', signal);
      });
      this.peer.on('connect', () => {
        console.log('WebRTC connected');
      });
      this.peer.on('error', (err: any) => {
        console.error('WebRTC error', err);
      });
      this.peer.on('close', () => {
        console.log('WebRTC closed');
      });
      client.on('signal', (signal: any) => {
        this.peer.signal(signal);
      });
    } else {
      this.peer.signal(data);
    }
  }
}
