import {Component, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import {Label, MultiDataSet, SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-movements-pie',
  templateUrl: './movements-pie.component.html',
  styleUrls: ['./movements-pie.component.sass']
})

export class MovementsPieComponent implements OnInit {
  constructor() {
  }

  // Doughnut
  public doughnutChartLabels: Label[] = ['Entertainment', 'Food & Dining', 'Transport'];
  public doughnutChartData: SingleDataSet = [350, 450, 100];
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {
  }
}
