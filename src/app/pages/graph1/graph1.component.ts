import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Barcelona', 'Manchester City', 'PSG'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': '¿Qué equipo ira Messi la próxima temporada?'
    },
    'grafico2': {
      'labels': ['Motagua', 'Olimpia'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': '¿Qué equipo eres de Honduras?'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Les gustan los perros?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Les gustan los gatos?'
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
