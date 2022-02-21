import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-vertical-bar-chart',
  template: `
    <chart
      class           = "vertical-bar-chart h-100"
      type            = "bar"
      [data]          = "dataChart"
      [options]       = "options"
      (clickCanvas)   = "onClickCanvas($event)"
      (clickDataset)  = "onClickDataset($event)"
      (clickElement)  = "onClickElement($event)"
      (clickElements) = "onClickElements($event)"
    ></chart>
  `
})
export class VerticalBarChartComponent implements OnInit {

  @Input() labels     : Array<Array<string>> = [];
  @Input() data       : Array<Array<number>> = [];
  @Input() colors     : Array<Array<string>> = [];
  @Input() showLines  : boolean              = true;
  @Input() showTicksX : boolean              = true;
  @Input() showTicksY : boolean              = true;
  @Input() showLabels : boolean              = true;
  @Input() numberBar  : number               = 1;
  @Input() typeLabels : number               = 0;
  @Input() formatter  : Array<any>           = [];
  @Input() paddingTop : number               = 50;

  @Output() clickCanvas   = new EventEmitter<any>();
  @Output() clickDataset  = new EventEmitter<any>();
  @Output() clickElement  = new EventEmitter<any>();
  @Output() clickElements = new EventEmitter<any>();

  public options   = null;
  public dataChart = {
      labels  : this.labels[0]
    , datasets: []
    , plugin: [ChartDataLabels]
  };

  constructor() { this.options = this.getOptions(); }

  ngOnInit() {
    for (let i = 0; i < this.numberBar; i++) {
      this.dataChart.datasets.push({
          data           : this.data[i]
        , label          : this.labels[1][i] ?? null
        , backgroundColor: (this.colors[i]?.length === 1) ? this.colors[i][0] : this.colors[i]
        , borderWidth    : 0
      });
    }
  }

  ngOnChanges() {
    this.options          = this.getOptions();
    this.dataChart['labels'] = this.labels[0];

    if (this.dataChart?.datasets?.length) {
      for (let i = 0; i < this.numberBar; i++) {
        this.dataChart.datasets[i].data  = this.data[i];
        this.dataChart.datasets[i].label = this.labels[1][i] ?? null;
        this.dataChart.datasets[i].backgroundColor = (this.colors[i]?.length === 1) ? this.colors[i][0] : this.colors[i];
      }
    }
  }

  getOptions() {
    return {
        responsive: true
      , maintainAspectRatio: false
      , layout: {
          padding: { top: this.paddingTop }
        }
      , legend: {
          display: (this.typeLabels === 2),
          labels : {
            fontColor: '#FFFFFF'
          }
        }
      , tooltips: {
          callbacks: {
            label: (tooltipItem) => this.callback(tooltipItem?.yLabel)
          }
        }
      , scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: '#5F5F5F',
              },
              ticks: {
                display: this.showTicksX,
                fontColor: '#FFFFFF',
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: this.showLines,
                color: '#5F5F5F',
              },
              ticks: {
                display  : this.showTicksY,
                fontColor: '#FFFFFF',
                callback : (v) => this.callback(v)
              }
            }
          ]
        }
      , plugins: {
          datalabels: {
            anchor   : 'end',
            align    : 'top',
            color    : '#FFFFFF',
            display  : this.showLabels,
            formatter: (v) => this.callback(Math.round(v))
          }
        }
    };
  }

  callback(value) {
    value = value.toLocaleString('pt-BR');

    if (this.formatter?.length === 2) {
      return (this.formatter[0] === 'start') ? `${this.formatter[1]}${value}` : `${value}${this.formatter[1]}` ;
    } else { return value; }
  }

  onClickCanvas   = (event) => this.clickCanvas  .emit(event);
  onClickDataset  = (event) => this.clickDataset .emit(event);
  onClickElement  = (event) => this.clickElement .emit(event);
  onClickElements = (event) => this.clickElements.emit(event);

}