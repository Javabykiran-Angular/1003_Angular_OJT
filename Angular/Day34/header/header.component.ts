import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!:string | null;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem("username");
  }

  onLogout(){
      sessionStorage.clear();
      sessionStorage.removeItem("username");
      this.router.navigate(['/login']);
  }

}
