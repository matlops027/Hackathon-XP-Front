import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-geral',
  templateUrl: './dashboard-geral.component.html',
  styleUrls: ['./dashboard-geral.component.css']
})
export class DashboardGeralComponent implements OnInit {

  public datadoughnut;
  public dataHorizontalBar;

  constructor() { }

  ngOnInit(): void {
    this.getObjGraphic();
  }

  getObjGraphic() {
    this.datadoughnut = { labels: ['teste', 'outro teste'], colors: ['#3F51B5'], data: [20, 10] };
    this.dataHorizontalBar = { labels: [['conta 1', 'conta 2', 'conta 3', 'conta 4', 'conta 5', 'conta 6'], []], data: [[50, 40, 30, 25, 15, 45]], colors: ['#3F51B5', '#3F51B5', '#3F51B5', '#3F51B5', '#3F51B5', '#3F51B5'] };
  }

}
