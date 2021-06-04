import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoanhthuUserPageComponent } from './doanhthu-user-page.component';

const routes: Routes = [{ path: '', component: DoanhthuUserPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoanhthuUserPageRoutingModule { }
