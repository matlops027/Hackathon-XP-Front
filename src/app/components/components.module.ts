
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular2-chartjs';
import { AppRoutingModule } from '../app-routing.module';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { HorizontalBarChartComponent } from './charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { VerticalBarChartComponent } from './charts/vertical-bar-chart/vertical-bar-chart.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    DoughnutChartComponent,
    HorizontalBarChartComponent,
    PieChartComponent,
    VerticalBarChartComponent
  ],
  imports: [
    ChartModule,
    AppRoutingModule,
    BrowserModule
  ],
  exports: [
    MenuComponent,
    DoughnutChartComponent,
    HorizontalBarChartComponent,
    PieChartComponent,
    VerticalBarChartComponent
  ],
  providers: []
})
export class ComponentsModule { }
