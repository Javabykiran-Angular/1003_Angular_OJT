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
      name:'Motorlla',
      price:30000,
      qty:1
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
