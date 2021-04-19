import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import {SignInComponentComponent} from '../../components/sign-in/sign-in-component.component';
import {InputUserComponent} from '../../components/sign-up/input-user.component';



@NgModule({
  declarations: [UserComponent,SignInComponentComponent,InputUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ]
})
export class UserModule { }
