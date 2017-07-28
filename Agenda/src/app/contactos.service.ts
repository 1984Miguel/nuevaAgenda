import { Injectable } from '@angular/core';
import {Contacto} from "./contactos"

// para http
import {Http, Response} from "@angular/http"
import {Observable} from "rxjs/Observable"
import "rxjs/add/operator/map"


// un servicio es una clase decorada con @injectable
// no necesita que le indiquemos ningun metadato
//// no olvidemos añadir el servicio en la coleccion de providers de nuestra aplicacion
@Injectable()
export class ContactosService {



  private _contactos: Contacto[];


  //inccion de dependencias
  constructor(private _http: Http) {

  
  }


obteberContactos(): Observable<Contacto[]>
{
  // return this._contactos;

  // el cliente http trabaja con objetos response tiene datos relacionados con la respuesta
  // del servidor : cabeceras estatus body NO DEBE SUBIR A LOS COMPONENTES ESTE OBJETO
  // por tando debemos transformar este objeto en el que realmente nos ha pedido el componente
  // en este caso coleccion de contactos para hacer esta operacion nos apollamosen map
  // es un operador de los objetos Observables Este operador tranforma un observable en otro
  // obs response -> obs contacto 
  return this._http
  .get('http://localhost:3004/contactos')
  .map((respuesta : Response) =>{
        return Contacto.nuevaColeccionDesdeJson(respuesta.json());

    /*
    let contactos: Contacto[];
    let contactosJson: any[] = respuesta.json();

    contactosJson.forEach((contactosJson: any) => {
      contactos.push(Contacto.nuevodesdeJson(contactosJson));
      
      });
       return contactos
       */
  });
}


// las peticiones http que envian datos a servidor de http (post put patch
// debemos enviar los datos como segundo parametro en este caso el contact a crear en
// el cuerpo de la peticion post
agregarContacto(contacto: Contacto): Observable<Contacto>
{
  //this._contactos.push(contacto);
  return this._http
        .post('http://localhost:3004/contactos', contacto)
         .map((respuesta: Response) =>{
           return Contacto.nuevodesdeJson(respuesta.json())
         });
}

  eliminarContacto(contacto: Contacto):void{
   // let posicion = this._contactos.indexOf(contacto);
   // this._contactos.splice(posicion, 1);
  }



}
