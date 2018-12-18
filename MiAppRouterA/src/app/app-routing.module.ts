import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

const routes: Routes = [ //Esto es un array donde vamos a poder generar las rutas
{path:"a", component:AComponent, pathMatch:"full"}, //el pathMatch full nos dice que tiene que coincidir exactamente con loq ue dice en el path
{path:"b", component:BComponent, pathMatch:"full"},
{path:"", redirectTo:"a", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //utilizamos esta orden para gestionar las rutas
  exports: [RouterModule]
})
export class AppRoutingModule { }
