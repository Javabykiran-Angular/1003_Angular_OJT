import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuiltpipe',
  templateUrl: './inbuiltpipe.component.html',
  styleUrls: ['./inbuiltpipe.component.css']
})
export class InbuiltpipeComponent implements OnInit {

  strMsg:string='hope so U r enjoying a Angular module By sumit Raokhande';

  num2:number=-452.78956324557;

  mydate=new Date();
  myname:string='sumit';
  constructor() { }

  ngOnInit(): void {
  }

}
