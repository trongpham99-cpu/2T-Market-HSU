import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhanhoiComponent } from './phanhoi.component';

const routes: Routes = [{ path: '', component: PhanhoiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhanhoiRoutingModule { }
