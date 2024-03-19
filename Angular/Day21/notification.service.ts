import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // notifications=new Subject<string>();

  notifications=new BehaviorSubject<string>("Hi Welcome");

  constructor() { }

  sendMessage(msg:string){
    this.notifications.next(msg);
  }

}
