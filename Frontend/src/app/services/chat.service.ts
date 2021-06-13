import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import {io,Socket}  from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket:any;
  readonly baseUrl = "http://127.0.0.1:8080"
  constructor(){
    this.socket = io(this.baseUrl);
  }

  listen(eventName: string){
    return new Observable((subscriber)=>{
      this.socket.on(eventName), (data) =>{
        subscriber.next(data);
      }
    })
  }

  emit(eventName: string, data: any){
    this.socket.emit(eventName,data);
  }

}
