import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

import {ContactosService} from "./contactos.service"

@NgModule({

  //componentes directivas (con vista asociada)
  // pipes (sinvista asociada) que nosotros creamos
  declarations: [
    AppComponent,
    ListaContactosComponent
    
  ],

  //indico modulos de los que dependo por ejemplo forms  
  imports: [
    BrowserModule
  ],

// los provehedores de aquellas piezas que sean susceptibles debugger
 // ser inyectadas como dependencias
 //añado aqui los servicion
  providers: [
    ContactosService
  ],

  //componente raiz de la gerarquia
  bootstrap: [AppComponent]
})
export class AppModule { }
