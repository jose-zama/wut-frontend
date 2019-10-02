import {Component, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import {Label, MultiDataSet, SingleDataSet} from 'ng2-charts';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-movements-pie',
  templateUrl: './movements-pie.component.html',
  styleUrls: ['./movements-pie.component.sass']
})

export class MovementsPieComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  // Doughnut
  public doughnutColors: any[] = [
    {backgroundColor: ['#86c7f3', '#ffe199', '#ffe100', '#00e199']},
    {borderColor: ['#AEEBF2', '#FEFFC9']}];
  public doughnutChartLabels: Label[] = ['Entertainment', 'Food & Dining', 'Transport'];
  public doughnutChartData: SingleDataSet = [350, 450, 200];
  public doughnutChartType: ChartType = 'doughnut';

  // File
  selectedFile: File;

  fetchData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'
    };
    // @ts-ignore
    return this.http.post('https://tjtu7umsk6.execute-api.us-east-1.amazonaws.com/prototype/classify', '', httpOptions);
  }

  onFileChanged(event) {

    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    const fileReader = new FileReader();
    fileReader.readAsText(this.selectedFile, 'UTF-8');
    fileReader.onload = () => {
      // let records = fileReader.result.toString().split('\n').map(line => {
      //   let x = line.split(',');
      //   return {
      //     mov: x[0],
      //     type: x[1]
      //   };
      // });
      // records = records.filter(x => x.mov !== '');
      // let groupbyType = records.reduce((a, b) => {
      //   if (a[b.type] === undefined) {
      //     a[b.type] = {};
      //     a[b.type].values = [];
      //   }
      //   a[b.type].values.push(b);
      //   return a;
      // }, {});
      //
      // Object.keys(groupbyType).forEach(x => {
      //   groupbyType[x].percentage = groupbyType[x].values.length / records.length * 100;
      // });
      //
      // this.doughnutChartLabels = Object.keys(groupbyType);
      // this.doughnutChartData = Object.keys(groupbyType)
      //   .map(x => groupbyType[x].percentage);
      //
      // console.log(groupbyType);

      // var data = Papa.parse(fileReader.result);
      //  console.log(JSON.parse(fileReader.result));

      this.fetchData().subscribe(resp => {
        let records = resp.split('\n').map(line => {
          let x = line.split(',');
          return {
            mov: x[0],
            type: x[1]
          };
        });
        records = records.slice(1);
        records = records.filter(x => x.mov !== '');
        let groupbyType = records.reduce((a, b) => {
          if (a[b.type] === undefined) {
            a[b.type] = {};
            a[b.type].values = [];
          }
          a[b.type].values.push(b);
          return a;
        }, {});
        Object.keys(groupbyType).forEach(x => {
          groupbyType[x].percentage = groupbyType[x].values.length / records.length * 100;
        });

        console.log(groupbyType);

        this.doughnutChartLabels = Object.keys(groupbyType);
        this.doughnutChartData = Object.keys(groupbyType)
          .map(x => groupbyType[x].percentage);
      });
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  ngOnInit() {
  }

}
