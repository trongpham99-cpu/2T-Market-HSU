import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputProductComponent } from './input-product.component';

const routes: Routes = [{ path: '', component: InputProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputProductRoutingModule { }
