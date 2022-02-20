import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  styles  : [`
    .w-150 {
      width: 150%;
      margin-left: -25%;
    }
  `],
  template: `
    <chart
      class           = "w-150"
      type            = "pie"
      [data]          = "dataChart"
      [options]       = "options"
      (clickCanvas)   = "onClickCanvas($event)"
      (clickDataset)  = "onClickDataset($event)"
      (clickElement)  = "onClickElement($event)"
      (clickElements) = "onClickElements($event)"
    ></chart>
  `
})
export class PieChartComponent {

  @Input() labels    : Array<string> = [];
  @Input() colors    : Array<string> = [];
  @Input() data      : Array<number> = [];
  @Input() typeLabels: number = 0;

  @Output() clickCanvas   = new EventEmitter<any>();
  @Output() clickDataset  = new EventEmitter<any>();
  @Output() clickElement  = new EventEmitter<any>();
  @Output() clickElements = new EventEmitter<any>();

  public dataChart = {
      labels  : this.labels
    , datasets: [{
          data: this.data
        , backgroundColor: this.colors
        , borderWidth: 0
      }]
  };

  public options = {
      legend: {
        display: (this.typeLabels === 2)
      }
    , responsive: true
    , plugins: {
        datalabels: {
          display: false
        }
    }
  };

  constructor() { }

  ngOnChanges() {
    this.dataChart.labels = this.labels;
    this.dataChart.datasets[0].data = this.data;
    this.dataChart.datasets[0].backgroundColor = this.colors;
    this.options.legend.display = (this.typeLabels === 2);
  }

  onClickCanvas   = (event) => this.clickCanvas  .emit(event);
  onClickDataset  = (event) => this.clickDataset .emit(event);
  onClickElement  = (event) => this.clickElement .emit(event);
  onClickElements = (event) => this.clickElements.emit(event);

}
