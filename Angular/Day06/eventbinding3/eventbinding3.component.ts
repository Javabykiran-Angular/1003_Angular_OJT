import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result: number=0;
  name:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(){
    console.log("Key up Event occur..")
  }

  onKeyDown(){
    console.log("Key Down Event occur..")
  }

  onEnterKey(){
    console.log("Enter Key is Pressed..")
  }

}
