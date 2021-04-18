import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { InputUserComponent } from '../../components/input-user/input-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SignUpComponent,InputUserComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule
  ]
})
export class SignUpModule { }
