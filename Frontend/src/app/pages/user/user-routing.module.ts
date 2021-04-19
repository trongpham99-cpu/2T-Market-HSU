import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponentComponent } from 'src/app/components/sign-in/sign-in-component.component';
import { InputUserComponent } from 'src/app/components/sign-up/input-user.component';

import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent },
{ path: 'signin',component:SignInComponentComponent},
{ path: 'signup',component:InputUserComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
