import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputProductComponent } from './input-product.component';
import {InputComponent} from '../../components/input-product/input.component';
import {InputUserComponent} from '../../components/sign-up/input-user.component';

const routes: Routes = [{ path: '', component: InputProductComponent },
{path:'input',component:InputComponent},
{path:'signup',component:InputUserComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputProductRoutingModule { }
