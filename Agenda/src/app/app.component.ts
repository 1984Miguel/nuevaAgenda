import { Component } from '@angular/core';






@Component({
  // selecto elemento html donde se intanciara este componente

  selector: 'app-root',
  //template url ruta al template del componente
  // podemos escribirla in lene en la plopiedad template
  templateUrl: './app.component.html',

  // indicamos la ruta de los documentos css que afecta a este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  


// inializamos los datos que se crean al principio


/*
  eliminarContacto(contacto: Contacto):void{
    /* elimina lista de este componente
    let posicion = this.contactos.indexOf(contacto);
    this.contactos.splice(posicion, 1);
    

    this._contactosService.eliminarContacto(contacto);
    this.contactos$ = this._contactosService.obteberContactos();
  }
  */
}
