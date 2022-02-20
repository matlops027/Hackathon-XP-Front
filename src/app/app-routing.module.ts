import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { DashboardGeralComponent } from './modules/dashboard/geral/dashboard-geral.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'dashboard-geral',
        component: DashboardGeralComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
