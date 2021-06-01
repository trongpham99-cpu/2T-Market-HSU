import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageReportRoutingModule } from './message-report-routing.module';
import { MessageReportComponent } from './message-report.component';


@NgModule({
  declarations: [MessageReportComponent],
  imports: [
    CommonModule,
    MessageReportRoutingModule
  ]
})
export class MessageReportModule { }
