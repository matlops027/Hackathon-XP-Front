import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { DashboardGeralComponent } from 'src/app/modules/dashboard/geral/dashboard-geral.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuList = [
    {name: 'Login', route: 'login'}
  ];

  currentMenu = 'Login';

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.route.navigate(['/login']);
  }

  changePage(page) {
    this.currentMenu = page.name;
    this.route.navigate(['/'+ page.route]);
  }

  onActivate(componentRef) {
    if(componentRef instanceof DashboardGeralComponent) {
      this.menuList.shift();
      this.menuList.push({name: 'Dashboard', route: 'dashboard-geral'})
      this.currentMenu = 'Dashboard';
    }else if (componentRef instanceof LoginComponent) {
      this.menuList = [{name: 'Login', route: 'login'}]
      this.currentMenu = 'Login';
    }
  }

}
