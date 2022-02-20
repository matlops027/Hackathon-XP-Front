import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
  }

  getBanks(){
    this.dashboardService.getData().subscribe(
      data => {
        console.log(data)
      }, error => {
        console.log(error)
      }
    )
  }

}
