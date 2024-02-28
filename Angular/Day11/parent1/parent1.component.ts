import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

    strMsg:string='Send data From Parent To child';

    jsonObj={
      id:9,
      fname:'Sumit',
      lname:'Raokhande'
    }

    sendDate:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onSendDate(mydate:string){
    console.log(mydate);
    this.sendDate=mydate;
  }

}
