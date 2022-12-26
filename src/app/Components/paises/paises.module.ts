import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisesComponent } from './paises.component';
import { CardPaisComponent } from 'src/app/Components/card-pais/card-pais.component';


@NgModule({
  declarations: [
    PaisesComponent,
    CardPaisComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ]
})
export class PaisesModule { }
