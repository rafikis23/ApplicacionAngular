import { Component, OnInit, Input} from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graph-donu',
  templateUrl: './graph-donu.component.html',
  styles: [
  ]
})
export class GraphDonuComponent implements OnInit {
/*
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data': [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    };
  */
  /*
  public doughnutChartLabels: Label[] = ['Con Frijoles', 'Con Natilla', 'Con tocino'];
  public doughnutChartData: MultiDataSet = [
  [24, 30, 46],
  [23, 24, 27]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  */
  @Input('chartLabels') doughnutChartLabels: Label[] = [];
  @Input('chartData') doughnutChartData: MultiDataSet = [];
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
