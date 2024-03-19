import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  dataReceived:string='';

  constructor(private notifyService:NotificationService) { }

  ngOnInit(): void {
    this.GetdataFromComponent();
  }

  GetdataFromComponent(){
      this.notifyService.notifications
      .subscribe((msg)=>{
        this.dataReceived=msg;
      })
  }

}
