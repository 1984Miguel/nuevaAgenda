import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({

  //componentes directivas o pipes que nosotros creamos
  declarations: [
    AppComponent
  ],

  //indico modulos de los que dependo por ejemplo forms  
  imports: [
    BrowserModule
  ],

// los provehedores de aquellas piezas que sean susceptibles debugger
 // ser inyectadas como dependencias
  providers: [],

  //componente raiz de la gerarquia
  bootstrap: [AppComponent]
})
export class AppModule { }
