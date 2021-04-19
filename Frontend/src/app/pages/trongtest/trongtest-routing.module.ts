import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrongtestComponent } from './trongtest.component';

const routes: Routes = [{ path: '', component: TrongtestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrongtestRoutingModule { }
