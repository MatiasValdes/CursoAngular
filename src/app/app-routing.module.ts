import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'game-of-throne', loadChildren: () => import('./Components/game-of-throne/game-of-throne.module').then(m => m.GameOfThroneModule) },
    { path: 'paises', loadChildren: () => import('./Components/paises/paises.module').then(m => m.PaisesModule) }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }