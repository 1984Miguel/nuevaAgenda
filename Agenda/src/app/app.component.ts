import { Component, OnInit } from '@angular/core';

import{ContactosService} from "./contactos.service"

import{Contacto} from "./contactos"

@Component({
  // selecto elemento html donde se intanciara este componente

  selector: 'app-root',
  //template url ruta al template del componente
  // podemos escribirla in lene en la plopiedad template
  templateUrl: './app.component.html',

  // indicamos la ruta de los documentos css que afecta a este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
// queremos que lo pinte el hijo una coleccion de contactos
  contactos: Contacto[];

// hago inyeccion de dependencias si o si
// para hacerlo en constructor de la clase. tenemos que indicar un
//  parametro con un modificador de acceso obligatorio
// ademas debemos anotar su tipo que no es otro al servicio a inyectar
constructor(private _contactosService: ContactosService){}


// inializamos los datos que se crean al principio
ngOnInit()
{
 this.contactos = this._contactosService.obteberContactos()
}

guardarContacto(contacto: Contacto): void
{
  this._contactosService.agregarContacto(contacto);
  this.contactos = this._contactosService.obteberContactos();
}

  eliminarContacto(contacto: Contacto):void{
    /* elimina lista de este componente
    let posicion = this.contactos.indexOf(contacto);
    this.contactos.splice(posicion, 1);
    */

    this._contactosService.eliminarContacto(contacto);
    this.contactos = this._contactosService.obteberContactos();
  }
}
