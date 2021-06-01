import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportPageRoutingModule } from './report-page-routing.module';
import { ReportPageComponent } from './report-page.component';


@NgModule({
  declarations: [ReportPageComponent],
  imports: [
    CommonModule,
    ReportPageRoutingModule
  ]
})
export class ReportPageModule { }
