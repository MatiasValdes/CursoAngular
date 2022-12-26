import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameOfThroneRoutingModule } from './game-of-throne-routing.module';
import { GameOfThroneComponent } from './game-of-throne.component';
import { CardGotComponent } from 'src/app/Components/card-got/card-got.component';

@NgModule({
  declarations: [
    GameOfThroneComponent,
    CardGotComponent
  ],
  imports: [
    CommonModule,
    GameOfThroneRoutingModule
  ]
})
export class GameOfThroneModule { }
