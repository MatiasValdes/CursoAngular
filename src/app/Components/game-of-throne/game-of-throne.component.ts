import { Component, OnInit } from '@angular/core';
import { GameOfThroneService } from 'src/app/services/ServiceGameOfThrone/game-of-throne.service';

@Component({
  selector: 'app-game-of-throne',
  templateUrl: './game-of-throne.component.html',
  styleUrls: ['./game-of-throne.component.css']
})
export class GameOfThroneComponent implements OnInit {

  characters: any;

  constructor(private service: GameOfThroneService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.service.getData().subscribe(resp => {
      this.characters = resp
    })
  }

}
