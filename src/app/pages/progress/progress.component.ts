import { Component, OnInit } from '@angular/core';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {
  porcentaje1: number = 0;
  porcentaje2: number = 0;

  constructor() { }
  // faPlus = faPlus;
  ngOnInit(): void {
  }
  actualizar1( event: number){
    this.porcentaje1 = event;
  }
  actualizar2( event: number){
    this.porcentaje2 = event;
  }
/*
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
  }
*/
}
// Implementacin del NgBoostrap
/* import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  providers: [NgbProgressbarConfig],
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  constructor( config: NgbProgressbarConfig )
  {
    // customize default values of progress bars used by this component tree
    config.max = 10000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '50px';
  }

  ngOnInit(): void {
  }

}
*/
/*
import {Component} from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-progressbar-config',
  templateUrl: './progressbar-config.html',
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
export class NgbdProgressbarConfig {
  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
}
*/
