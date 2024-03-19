import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  myjson={
    id:0,
    fname:'',
    status:''
  }

  dataRecived:string='';
  constructor(private route:ActivatedRoute,
              private notify:NotificationService) { }

  ngOnInit(): void {
    this.GetdataFromUrl();
    this.GetDataFromComponent();
  }

  GetDataFromComponent(){
    this.notify.notifications
    .subscribe((msg)=>{
        this.dataRecived=msg;
    })
  }

  GetdataFromUrl(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
        this.myjson.id=+param.get("id");
        this.myjson.fname=param.get("fname");
        this.myjson.status=param.get("status");
      })
  }

  onSend(msg:string){
      this.notify.sendMessage(msg);
  }

}
