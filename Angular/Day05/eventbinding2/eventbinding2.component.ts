import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onDollerEvent(myevent:any){

    console.log(myevent);

    console.log(myevent.target.value);

  }

  onSend(myname:any){
    console.log(myname);
    console.log(myname.value);
    myname.style.background='green';
    myname.style.color="white";
  }

  onSend1(myvalue:string){
    console.log(myvalue);
  }

  onAddition(num1:any,num2:any){

      let n1=+num1;
      let n2=+num2;

      this.result=n1+n2;

    // this.result=num1+num2;
  }

  onChange(){
    console.log("Change Event Occur...")
  }

}
