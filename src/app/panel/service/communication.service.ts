import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client';
import {observable, Observable} from 'rxjs';


const SERVER_URL = 'http://localhost:5000';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
    this.socket.emit('connection');
    this.socket.on('online', (data: any) => console.log('CLIENT ONLINE: ' + data));
  }

  public send(message: any): void {
    this.socket.emit('chat message', message);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', (data: any) => observer.next(data));
    });
  }
}
