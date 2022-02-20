
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    MenuComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
  ],
  providers: []
})
export class ComponentsModule { }
