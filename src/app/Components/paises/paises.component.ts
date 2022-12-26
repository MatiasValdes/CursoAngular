import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/ServicePaises/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: any;

  constructor(private service: PaisesService) { }

  ngOnInit(): void {
    this.getPais();
  }

  getPais() {
    this.service.getData().subscribe(resp => {
      this.paises = resp;
    })
  }

}
