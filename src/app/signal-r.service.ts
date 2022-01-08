import {EventEmitter, Injectable} from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@aspnet/signalr';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  information = new EventEmitter<any>();
  private hubConnection!: HubConnection;

  constructor() {
    this.createConnection();
    this.register();
    this.startConnection();
  }

  private createConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/inform', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .configureLogging(signalR.LogLevel.Debug)
      .build();
  }

  private register(): void {
    this.hubConnection.on('InformClient', (param: any) => {
      console.log("Register")
      console.log(param);
      this.information.emit(param);
    });
  }

  private startConnection(): void {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started.');
      })
      .catch(err => {
        console.log('Oops!');
      });
  }
}