import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Core Java','Adavanced java','Spring Core','Spring Boot','HTML,CSS,Js','MySql','Angular','Docker','jenkings','AWS'];

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

  selected:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(item:any){
    console.log("Mouse Over Event Occur...")
    console.log(item);
    this.selected=item.name;
  }

  onMouseOut(){
    console.log("------------- Mouse Out Event Occur---------------");
    this.selected='';
  }

}
