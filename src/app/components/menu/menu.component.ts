import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuList = [
    {name: 'Login', route: 'login'},
    {name: 'Dashboard', route: 'dashboard-geral'}
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

}
