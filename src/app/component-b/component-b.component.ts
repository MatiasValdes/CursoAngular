import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  constructor(private myService: MyServiceService) { }

  ngOnInit() {
    console.log('inicio de mi componente B')
    console.log('LLamando a mi servicio', this.getGames())
  }

  getGames() {
    return this.myService.getData()
  }
}