import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaispComponent } from './loaisp.component';

const routes: Routes = [{ path: '', component: LoaispComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoaispRoutingModule { }
