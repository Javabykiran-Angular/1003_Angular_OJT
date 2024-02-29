import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit,AfterViewInit {

  @ViewChild("mydiv") Mydiv!:ElementRef<HTMLDivElement>;

  @ViewChild(Child3Component) childAccess!:Child3Component;
  constructor() { }
  

  ngOnInit(): void {
    console.log(this.Mydiv);
  }

  ngAfterViewInit(): void {
    console.log(this.Mydiv);
    this.Mydiv.nativeElement.className="highlight";
  }

  onPropertyAccess(){
    this.childAccess.username='Spruha Raokhande';
  }

  onMethodAccess(){
    this.childAccess.onShowAlert();
  }

  onIncrement(){
    this.childAccess.increment();
  }

  onDecrement(){
    this.childAccess.decrement();
  }

}
