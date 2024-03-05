import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  strDetails:string='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti, quod doloremque laudantium at sed nisi tenetur saepe laborum, accusantium unde? Tenetur atque quisquam officiis ducimus fuga dignissimos autem quasi.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti, quod doloremque laudantium at sed nisi tenetur saepe laborum, accusantium unde? Tenetur atque quisquam officiis ducimus fuga dignissimos autem quasi.';

  constructor() { }

  ngOnInit(): void {
  }

}
