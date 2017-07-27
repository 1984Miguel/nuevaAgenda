import { Injectable } from '@angular/core';


// un servicio es una clase decorada con @injectable
// no necesita que le indiquemos ningun metadato
//// no olvidemos añadir el servicio en la coleccion de providers de nuestra aplicacion
@Injectable()
export class ContactosService {



  private _contactos: string[];

  constructor() {

  this._contactos = [
    'Tim Cook',
    'Bill Gates',
    'Richard Stallman',
    'Steve Wozniak'
   ];
  }


obteberContactos(): string[]
{
  return this._contactos;
};

agregarContacto(contacto: string)
{
  this._contactos.push(contacto);
}

  eliminarContacto(contacto: string):void{
    let posicion = this._contactos.indexOf(contacto);
    this._contactos.splice(posicion, 1);
  }



}
