import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Contacto} from "../contactos"

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {



  // podemos enlazar datos de un componente padre
  @Input() datos: Contacto[];


  //con output exponemos eventos a otros componentes
  // es necesario que sea EventEmiter<t>

  @Output() clickEnEliminar = new EventEmitter<Contacto>();

// para emitir datos usamos la funcion emit del EventEmiter
  notificarEliminacion(datoContacto: Contacto):void{

    //
    this.clickEnEliminar.emit(datoContacto)
  }


  constructor() { }



  ngOnInit() {
  }

}
