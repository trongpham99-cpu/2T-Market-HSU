import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { SignInComponentComponent } from '../../components/sign-in-component/sign-in-component.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [SignInComponent,SignInComponentComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ]
})
export class SignInModule { }
