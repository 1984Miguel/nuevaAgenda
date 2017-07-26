import { Component, OnInit } from '@angular/core';

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
  title = 'Mi aplicacion';

ngOnInit()
{
  //


  console.log("hola")
}
}