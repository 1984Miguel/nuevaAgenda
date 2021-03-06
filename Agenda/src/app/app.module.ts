import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http"
import {AppRoutingModule} from "./app-routing/app-routing.module"

import { AppComponent } from './app.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

import {ContactosService} from "./contactos.service";
import { FormularioAltaComponent } from './formulario-alta/formulario-alta.component';
import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component'

@NgModule({

  //componentes directivas (con vista asociada)
  // pipes (sinvista asociada) que nosotros creamos
  declarations: [
    AppComponent,
    ListaContactosComponent,
    FormularioAltaComponent,
    MisContactosComponent,
    NuevoContactoComponent
    
  ],

  //indico modulos de los que dependo por ejemplo forms  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
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
