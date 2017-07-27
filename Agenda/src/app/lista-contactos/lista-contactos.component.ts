import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {



  // podemos enlazar datos de un componente padre
  @Input() datos: string[];


  //con output exponemos eventos a otros componentes
  // es necesario que sea EventEmiter<t>

  @Output() clickEnEliminar = new EventEmitter<string>();

// para emitir datos usamos la funcion emit del EventEmiter
  notificarEliminacion(datoContacto: string):void{

    //
    this.clickEnEliminar.emit(datoContacto)
  }


  constructor() { }



  ngOnInit() {
  }

}
