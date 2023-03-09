import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'ws';

@WebSocketGateway(8080)
export class WebRTCGateway {
  @WebSocketServer()
  server: Server;
}
