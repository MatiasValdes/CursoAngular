import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pais',
  templateUrl: './card-pais.component.html',
  styleUrls: ['./card-pais.component.css']
})
export class CardPaisComponent implements OnInit {

  @Input() dataPais: any = { name: "", capital: "", flags: "" };

  constructor() {}

  ngOnInit(): void {
      
  }
}
