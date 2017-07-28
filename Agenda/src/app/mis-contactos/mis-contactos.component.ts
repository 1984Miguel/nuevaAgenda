import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable"
import{ContactosService} from "../contactos.service"

import{Contacto} from "../contactos"

@Component({
  selector: 'app-mis-contactos',
  templateUrl: './mis-contactos.component.html',
  styleUrls: ['./mis-contactos.component.css']
})
export class MisContactosComponent implements OnInit {

  // queremos que lo pinte el hijo una coleccion de contactos
  // contactos: Contacto[];
  contactos$: Observable<Contacto[]>;

  // hago inyeccion de dependencias si o si
// para hacerlo en constructor de la clase. tenemos que indicar un
//  parametro con un modificador de acceso obligatorio
// ademas debemos anotar su tipo que no es otro al servicio a inyectar
constructor(private _contactosService: ContactosService){}

  

  ngOnInit() {
  
     this.contactos$ = this._contactosService
                  .obteberContactos();
               //  .subscribe(contactos: Contacto[])
}

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
