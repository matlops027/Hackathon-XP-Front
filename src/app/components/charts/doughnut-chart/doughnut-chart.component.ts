import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  styles  : [`
    .doughnut-label {
      transform: translate(0, -50%);
      position: absolute;
      line-height: 1;
      margin: auto;
      top: 45%;
      right: 0;
      left: 0;
    }

    .w-150 {
      width: 150%;
      margin-left: -25%;
    }
  `],
  template: `
    <!-- LABEL INTERNO -->
    <div *ngIf="typeLabels === 1" class="text-center doughnut-label"><ng-content></ng-content></div>

    <!-- GRÁFICO -->
    <chart
      class           = "w-150"
      type            = "doughnut"
      [data]          = "dataChart"
      [options]       = "options"
      (clickCanvas)   = "onClickCanvas($event)"
      (clickDataset)  = "onClickDataset($event)"
      (clickElement)  = "onClickElement($event)"
      (clickElements) = "onClickElements($event)"
    ></chart>
  `
})
export class DoughnutChartComponent {

  @Input() labels    : Array<string> = [];
  @Input() colors    : Array<string> = [];
  @Input() data      : Array<number> = [];
  @Input() radius    : number = 70;
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
    , plugins: {
        datalabels: {
          display: false
        }
      }
    , responsive: true
    , cutoutPercentage : this.radius
  };

  constructor() { }

  ngOnChanges() {
    this.dataChart.labels = this.labels;
    this.dataChart.datasets[0].data = this.data;
    this.dataChart.datasets[0].backgroundColor = this.colors;

    this.options.legend.display = (this.typeLabels === 2);
    this.options.cutoutPercentage = this.radius;
  }

  onClickCanvas   = (event) => this.clickCanvas  .emit(event);
  onClickDataset  = (event) => this.clickDataset .emit(event);
  onClickElement  = (event) => this.clickElement .emit(event);
  onClickElements = (event) => this.clickElements.emit(event);

}