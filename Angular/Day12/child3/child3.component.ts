import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  username:string='Default username';
  count:number=0;
  constructor() { }

  ngOnInit(): void {
  }


  onShowAlert(){
    this.username='Sumit...';
    alert("Welcome "+this.username);
  }

increment(){
  this.count++;
}

decrement(){
  this.count--;
}


}
