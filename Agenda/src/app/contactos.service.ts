import { Injectable } from '@angular/core';
import {Contacto} from "./contactos"

// un servicio es una clase decorada con @injectable
// no necesita que le indiquemos ningun metadato
//// no olvidemos añadir el servicio en la coleccion de providers de nuestra aplicacion
@Injectable()
export class ContactosService {



  private _contactos: Contacto[];

  constructor() {

  this._contactos = [
    new Contacto('Tim Cook'),
    new Contacto('Bill Gates'),
    new Contacto('Richard Stallman'),
    new Contacto('Steve Wozniak')
   ];
  }


obteberContactos(): Contacto[]
{
  return this._contactos;
};

agregarContacto(contacto: Contacto)
{
  this._contactos.push(contacto);
}

  eliminarContacto(contacto: Contacto):void{
   // let posicion = this._contactos.indexOf(contacto);
   // this._contactos.splice(posicion, 1);
  }



}
