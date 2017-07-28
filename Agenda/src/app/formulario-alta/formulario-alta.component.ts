import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup} from '@angular/forms';

import {Contacto} from '../contactos';

@Component({
  selector: 'formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css']
})
export class FormularioAltaComponent {

  
@Output() clikEnGuardar = new EventEmitter<Contacto>();

  notificarContacto(formulario: FormGroup): void{

/*
let contacto = new Contacto(
  formulario.value.nombre,
  formulario.value.apellido,
  formulario.value.telefono,
  formulario.value.correo )
*/

let contacto = Contacto.nuevodesdeJson(formulario.value)
    this.clikEnGuardar.emit(contacto);
   formulario.reset();

//  }
}
}
