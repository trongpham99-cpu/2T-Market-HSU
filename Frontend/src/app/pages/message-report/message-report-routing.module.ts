import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageReportComponent } from './message-report.component';

const routes: Routes = [{ path: '', component: MessageReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageReportRoutingModule { }
