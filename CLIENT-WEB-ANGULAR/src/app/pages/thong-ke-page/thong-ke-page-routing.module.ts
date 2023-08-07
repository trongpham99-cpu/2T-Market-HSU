import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThongKePageComponent } from './thong-ke-page.component';

const routes: Routes = [{ path: '', component: ThongKePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongKePageRoutingModule { }
