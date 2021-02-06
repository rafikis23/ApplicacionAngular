import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('htmlIncrementador') htmlIncrementador: ElementRef;
  @Input('nombre') cadena: string = 'Parametros';
  @Input() porcentaje: number = 50;
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  enCambio( nuevoValor: number ){
  // let elemHTML: any = document.getElementsByName('porcentaje')[0];
    if ( nuevoValor >= 100 ){
      this.porcentaje = 100;
    }else if ( nuevoValor <= 0){
      this.porcentaje = 0;
    }else {
      this.porcentaje = nuevoValor;
    }
   // elemHTML.value = this.porcentaje;
    this.htmlIncrementador.nativeElement.value = this.porcentaje;
    this.cambioValor.emit( this.porcentaje);

  }
  cambiarValor( valor: number ){
    if ( this.porcentaje >= 100 && valor > 0){
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0 ){
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje );
    this.htmlIncrementador.nativeElement.focus();
  }

}
