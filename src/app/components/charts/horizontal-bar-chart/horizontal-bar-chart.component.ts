import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-horizontal-bar-chart',
  template: `
    <chart
      class           = "horizontal-bar-chart h-100"
      type            = "horizontalBar"
      [data]          = "dataChart"
      [options]       = "options"
      (clickCanvas)   = "onClickCanvas($event)"
      (clickDataset)  = "onClickDataset($event)"
      (clickElement)  = "onClickElement($event)"
      (clickElements) = "onClickElements($event)"
    ></chart>
  `
})
export class HorizontalBarChartComponent implements OnInit {

  @Input() labels     : Array<Array<string>> = [];
  @Input() data       : Array<Array<number>> = [];
  @Input() colors     : Array<string>        = [];
  @Input() showLines  : boolean              = true;
  @Input() showTicksX : boolean              = true;
  @Input() showTicksY : boolean              = true;
  @Input() numberBar  : number               = 1;
  @Input() typeLabels : number               = 0;
  @Input() formatter  : Array<any>           = [];

  @Output() clickCanvas   = new EventEmitter<any>();
  @Output() clickDataset  = new EventEmitter<any>();
  @Output() clickElement  = new EventEmitter<any>();
  @Output() clickElements = new EventEmitter<any>();

  public dataChart = {
      labels  : this.labels[0]
    , datasets: []
    , plugin: [ChartDataLabels]
  };

  public options = {
      responsive: true
    , maintainAspectRatio: false
    , layout: {
        padding: { right: 20 }
      }
    , legend: {
        display: (this.typeLabels === 2),
        labels : {
          fontColor: '#000000'
        }
      }
    , tooltips: {
        callbacks: {
          label: (tooltipItem) => this.callback(tooltipItem?.xLabel)
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
              fontColor: '#000000',
              callback : (v) => this.callback(v)
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
              fontColor: '#000000',
              lineHeight: 1
            }
          }
        ]
      }
    , plugins: {
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: '#000000',
          formatter: (v) => this.callback(Math.round(v))
        }
      }
  };

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.numberBar; i++) {
      this.dataChart.datasets.push({
          data           : this.data[i]
        , label          : this.labels[1][i] ?? null
        , backgroundColor: this.colors[i]
        , borderWidth    : 0
      });
    }
  }

  ngOnChanges() {
    this.options.legend.display = (this.typeLabels === 2);
    this.options.scales.xAxes[0].ticks.display     = this.showTicksX;
    this.options.scales.yAxes[0].ticks.display     = this.showTicksY;
    this.options.scales.yAxes[0].gridLines.display = this.showLines;

    this.dataChart.labels       = this.labels[0];

    if (this.dataChart.datasets.length) {
      for (let i = 0; i < this.numberBar; i++) {
        this.dataChart.datasets[i].data  = this.data[i];
        this.dataChart.datasets[i].label = this.labels[1][i] ?? null;
        this.dataChart.datasets[i].backgroundColor = this.colors[i];
      }
    }
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
