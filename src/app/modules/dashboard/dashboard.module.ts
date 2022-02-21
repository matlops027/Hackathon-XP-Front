
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { DashboardGeralComponent } from './geral/dashboard-geral.component';

@NgModule({
  declarations: [
    DashboardGeralComponent
  ],
  imports: [
    ComponentsModule
  ],
  providers: []
})
export class DashboardModule { }
