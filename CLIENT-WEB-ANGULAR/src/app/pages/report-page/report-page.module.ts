import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportPageRoutingModule } from './report-page-routing.module';
import { ReportPageComponent } from './report-page.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReportPageComponent],
  imports: [
    CommonModule,
    ReportPageRoutingModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ReportPageModule { }
