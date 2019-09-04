import {Component, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import {Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-movements-pie',
  templateUrl: './movements-pie.component.html',
  styleUrls: ['./movements-pie.component.sass']
})

export class MovementsPieComponent implements OnInit {
  constructor() {
  }

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {}
}
