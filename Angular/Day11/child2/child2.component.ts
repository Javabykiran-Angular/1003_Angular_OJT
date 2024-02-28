import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 @Output() strChildEvent=new EventEmitter();

 @Output() arrprodChildEvent=new EventEmitter();

 @Output() dateChildEvent=new EventEmitter();

  strmsg:string='Data Send to parent from Child...';

  arrProduct=[
    {
      name:'OnePlus',
      price:45000,
      qty:1
    },
    {
      name:'Samsung',
      price:25000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    },
    {
      name:'Motorolla',
      price:30000,
      qty:1
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.strChildEvent.emit(this.strmsg);
    this.arrprodChildEvent.emit(this.arrProduct);
  }

  onDate(date:any){
    this.dateChildEvent.emit(date);
  }

}
