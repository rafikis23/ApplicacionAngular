import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
  }
  cambiarTema( tema: string, link: any ){
    // console.log( tema );
    this.aplicarCheck( link );
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
  }
  aplicarCheck( link: any){
    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

}
