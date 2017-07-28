import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MisContactosComponent} from "../mis-contactos/mis-contactos.component"
import {NuevoContactoComponent} from "../nuevo-contacto/nuevo-contacto.component"


//defino rutas de la aplicacion cada una de ellas debe tener

//  path que indicamos ruta a navegar
// component componente que responde de la ruta
const routes: Routes = [
{
  path: 'mis-contactos',
  component: MisContactosComponent
},
{
  path: 'nuevo-contacto',
  component: NuevoContactoComponent
},
{
  path: '**',
  pathMatch: 'full',
  redirectTo: '/mis-contactos'
}

];
// router module.forRoot() registramos rutas en el modulo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
