import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuctrongComponent } from './ductrong.component';

const routes: Routes = [{ path: '', component: DuctrongComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuctrongRoutingModule { }
