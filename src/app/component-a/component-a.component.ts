import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {
  ngOnInit(){
      console.log('inicio de mi componente A')
  }
}
