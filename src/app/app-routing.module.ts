import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { LandingComponent } from './components/landing/landing.component';


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
        path: 'landing',
        component: LandingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
