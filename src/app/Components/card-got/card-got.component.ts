import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-got',
  templateUrl: './card-got.component.html',
  styleUrls: ['./card-got.component.css']
})
export class CardGotComponent implements OnInit {

  @Input() dataGot: any = { fullName: "", title: "", imageUrl: "" };

  constructor() {}

  ngOnInit(): void {
      
  }

}
