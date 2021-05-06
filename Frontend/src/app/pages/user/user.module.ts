import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserPostComponent } from '../../components/user/user-post/user-post.component';
import { InfoUserComponent } from '../../components/user/info-user/info-user.component';
import { UserPostChoDuyetComponent } from '../../components/user/user-post-cho-duyet/user-post-cho-duyet.component';


@NgModule({
  declarations: [UserComponent,UserPostComponent,InfoUserComponent,UserPostChoDuyetComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
